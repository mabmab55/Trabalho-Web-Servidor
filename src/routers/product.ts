import { Router } from "express";


export const product = Router();

product.get("/product", (req, res) => {
    res.render("product");
});

