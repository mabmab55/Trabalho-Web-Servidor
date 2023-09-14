import { Router } from "express";
import { products as productsArray } from "../db";

export const products = Router();

products.get("/products", (req, res) => {
    res.render("products", { productsArray: productsArray });
});
