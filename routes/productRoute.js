import express from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controller/product.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/product", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
