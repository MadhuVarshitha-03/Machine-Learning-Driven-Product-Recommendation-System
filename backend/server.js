const dns = require("dns");

dns.setServers(["8.8.8.8"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();


// =========================
// MIDDLEWARE
// =========================

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    })
);

app.use(express.json());


// =========================
// ROUTES
// =========================

app.use("/api/products", productRoutes);

app.use(
    "/api/recommendations",
    recommendationRoutes
);


// =========================
// BASIC ROUTES
// =========================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Product Recommendation Backend is running"
    });
});


app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is working"
    });
});


// =========================
// START SERVER
// =========================

const PORT = process.env.PORT || 5000;

const startServer = async () => {

    try {

        await mongoose.connect(
            process.env.MONGO_URI,
            {
                dbName: "productRecommendationDB"
            }
        );

        console.log(
            "MongoDB connected successfully"
        );

        console.log(
            "Database:",
            mongoose.connection.db.databaseName
        );

        app.listen(PORT, () => {

            console.log(
                `Server running on port ${PORT}`
            );

        });

    } catch (error) {

        console.error(
            "MongoDB connection failed:",
            error.message
        );

        process.exit(1);
    }
};


startServer();