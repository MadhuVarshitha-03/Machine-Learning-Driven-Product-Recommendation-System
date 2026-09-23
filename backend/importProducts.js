const dns = require("dns");

dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
require("dotenv").config();

const Product = require("./models/Product");

// Path to amazon.csv
const csvPath = path.join(
    __dirname,
    "..",
    "amazon.csv"
);

// Connect to MongoDB Atlas
mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "productRecommendationDB"
    })
    .then(() => {
        console.log("MongoDB connected successfully");
        importProducts();
    })
    .catch((error) => {
        console.error(
            "MongoDB connection error:",
            error
        );
    });

async function importProducts() {

    const products = [];

    fs.createReadStream(csvPath)
        .pipe(csv())
        .on("data", (row) => {

            products.push({
                id: Number(row.id),
                title: row.title,
                category: row.category,
                description: row.description,
                image_url: row.image_url
            });

        })
        .on("end", async () => {

            try {

                console.log(
                    `Found ${products.length} products in CSV`
                );

                // Delete all old products
                console.log("Removing old products...");

                await Product.deleteMany({});

                console.log("Old products removed.");

                // Insert new products
                await Product.insertMany(products);

                console.log(
                    `Successfully imported ${products.length} products!`
                );

                // Verify count
                const count = await Product.countDocuments();

                console.log(
                    `Products currently in MongoDB: ${count}`
                );

                await mongoose.connection.close();

                console.log("MongoDB connection closed.");

            } catch (error) {

                console.error(
                    "Import error:",
                    error
                );

                await mongoose.connection.close();
            }

        });

}