import { Router } from "express";
import { products } from "../db";
import { checkIfLoggedUserIsAdmin } from "src/utils";
export const product = Router();

product.get("/products/new", (req, res) => {
    const isAdmin = checkIfLoggedUserIsAdmin(res.locals.email);

    if (!isAdmin) {
        res.render("notFoundPage");
        return;
    }

    return res.render("newProduct");
});

product.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);

    if (product) {
        res.render("product", { product });
        return;
    }

    return res.render("product", { error: "Tênis não encontrado!" });
});
