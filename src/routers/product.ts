import { Router } from "express";
import { products } from "../db";
export const product = Router();

product.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);
    console.log(product);

    if (product) {
        res.render("product", { product });
        return;
    }
    return res.render("product", { error: "Tênis não encontrado!" });
});
