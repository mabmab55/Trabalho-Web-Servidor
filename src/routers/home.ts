import { Router } from "express";

export const home = Router();

home.get("/", (req, res) => {
    res.redirect("/products");
});
