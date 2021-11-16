// routes for products
import express from "express";

export const router = express.Router();

// api/products
router.post("/", () => {
  console.log("create product");
});
