const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");

const router = express.Router();


// =========================
// GET ALL PRODUCTS
// =========================

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            count: products.length,
            products: products
        });

    } catch (error) {
        console.error(
            "Error fetching products:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch products"
        });
    }
});


// =========================
// GET PRODUCT BY ID
// =========================

router.get("/:id", async (req, res) => {
    try {

        const { id } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {

            return res.status(400).json({
                success: false,
                message: "Invalid product ID"
            });
        }

        const product = await Product.findById(id);

        // Product does not exist
        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product: product
        });

    } catch (error) {

        console.error(
            "Error fetching product:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch product"
        });
    }
});


module.exports = router;