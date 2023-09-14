import { Router } from "express";
import { products as productsArray } from "../db";
import { checkIfLoggedUserIsAdmin, validator } from "src/utils";
import { Request } from "src/@types";

export const products = Router();

products.get("/products", (req, res) => {
    const isAdmin = checkIfLoggedUserIsAdmin(res.locals.email);

    res.render("products", { productsArray: productsArray, isAdmin });
});

interface ProductsBody {
    model?: string;
    detail?: string;
    quantity?: string;
    price?: string;
}

products.post("/products", (req: Request<ProductsBody>, res) => {
    const { detail, model, price, quantity } = req.body;

    if (!validator.isString(model) || model === "") {
        res.render("newProduct", {
            error: {
                model: "Campo obrigatório",
            },
        });
        return;
    }

    if (!validator.isValidPassword(detail)) {
        res.render("newProduct", {
            error: {
                detail: "Campo obrigatório",
            },
        });
        return;
    }

    if (isNaN(Number(price)) || Number(price) === 0) {
        res.render("newProduct", {
            error: {
                price: "Preço inválido!",
            },
        });

        return;
    }

    if (isNaN(Number(quantity)) || Number(quantity) === 0) {
        res.render("newProduct", {
            error: {
                quantity: "Preço inválido!",
            },
        });

        return;
    }

    productsArray.push({
        detail,
        id: String(Number(productsArray.at(-1)?.id) + 1),
        img: "/assets/tenis06.jpg",
        model,
        price: Number(price),
        quantity: Number(quantity),
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    });

    res.render("productCreated");
});
