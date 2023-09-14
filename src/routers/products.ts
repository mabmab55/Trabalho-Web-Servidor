import { Router } from "express";
import { productsArray } from "../db/index";

export const products = Router();

products.get("/products", (req, res) => {
    res.render("products", { productsArray: productsArray });
});
