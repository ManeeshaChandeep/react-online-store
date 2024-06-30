const Product = require("../models/ProductModel");

const productController = {

    getAllProducts: async function (req, res, next) {
        try {
            let allProducts = await Product.find();
            res.status(200).json({success: true, data: allProducts, message: "All products retrieved successfully"});
        } catch (error) {
            res.status(500).json({success: false, message: "Error retrieving products", error: error.message});
        }
    },

    postProduct: async function (req, res, next) {
        try {
            const product = req.body

            const newProduct = await Product.create({
                title: product.title,
                price: product.price,
                description: product.description,
                image1: product.image1,
                image2: product.image2,
                image3: product.image3,
                image4: product.image4,
            })

            res.status(201).json({success: true, data: '', message: "Product created successfully"});
        } catch (error) {
            res.status(500).json({success: false, message: "Error creating product", error: error.message});
        }
    },
//nhiuygu
    updateProduct: async function (req, res, next) {
        const { sku, title, price, description } = req.body;
        try {
            const updateProduct = await Product.findOne({ sku:sku });

            if (updateProduct) {
                updateProduct.title = title;
                updateProduct.price = price;
                updateProduct.description = description;

                await updateProduct.save();

                res.status(200).json({ success: true, data: updateProduct, message: "Product updated successfully" });
            } else {
                res.status(404).json({ success: false, data: '', message: "Product not found" });
            }
        } catch (error) {
            res.status(500).json({success: false, message: "Error updating product", error: error.message});
        }
    },
//bhgugg
    getAllRequested: async function (req, res, next) {
        try {
            let requestedArticles = await Product.find({availability: "requested"});
            res.status(200).json({
                success: true,
                data: requestedArticles,
                message: "Requested articles retrieved successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error retrieving requested articles",
                error: error.message
            });
        }
    },

    deleteProduct: async function (req, res, next) {
        try {
            const {id} = req.params;
            let article = await Product.deleteOne({sku: id});

            if (article.deletedCount > 0) {
                res.status(200).json({success: true, data: '', message: "Product deleted successfully."});
            } else {
                res.status(404).json({success: false, data: '', message: "Product not found."});
            }
        } catch (error) {
            res.status(500).json({success: false, data: '', message: error.message});
        }
    },

    updateViews: async function (req, res, next) {
        try {
            let id = req.params.id;
            const updatedArticle = await Product.findByIdAndUpdate(
                id,
                {$inc: {clicks: 1}},
                {new: true}
            );

            if (!updatedArticle) {
                return res.status(404).json({success: false, data: '', message: 'Product not found'});
            }

            res.status(200).json({success: true, data: '', message: "Product click count incremented"});
        } catch (error) {
            res.status(500).json({success: false, data: '', message: error.message});
        }
    },

    getMostClickedProduct: async function (req, res, next) {
        try {
            const articles = await Product.find().sort({clicks: -1}).limit(10);
            res.status(200).json({
                success: true,
                data: articles,
                message: "Most clicked products retrieved successfully"
            });
        } catch (error) {
            res.status(500).json({success: false, data: '', message: error.message});
        }
    }
}

module.exports = productController;