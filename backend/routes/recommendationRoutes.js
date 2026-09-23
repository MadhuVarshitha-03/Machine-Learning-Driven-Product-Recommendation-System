const express = require("express");
const axios = require("axios");

const router = express.Router();


// =========================
// GET RECOMMENDATIONS
// =========================

router.post("/", async (req, res) => {

    try {

        const { product } = req.body;

        // Validate product
        if (
            !product ||
            typeof product !== "string" ||
            product.trim().length === 0
        ) {

            return res.status(400).json({
                success: false,
                message: "A valid product name is required"
            });
        }

        const productName = product.trim();


        // Call Python ML service
        const response = await axios.post(
            `${process.env.ML_SERVICE_URL}/recommend`,
            {
                product: productName
            }
        );


        // Return recommendations
        res.status(200).json({
            success: true,
            product: productName,
            recommendations:
                response.data.recommendations || []
        });

    } catch (error) {

        console.error(
            "Recommendation service error:",
            error.message
        );


        // ML service unavailable
        if (error.code === "ECONNREFUSED") {

            return res.status(503).json({
                success: false,
                message:
                    "Recommendation service is currently unavailable"
            });
        }


        // General server error
        res.status(500).json({
            success: false,
            message:
                "Unable to generate recommendations"
        });
    }
});


module.exports = router;