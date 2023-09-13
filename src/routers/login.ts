import { Router } from "express";
import { Request } from "../@types";
import { users } from "../db";

export const login = Router();

login.get("/login", (req, res) => {
    res.render("login");
});

interface LoginBody {
    email?: string;
    password?: string;
}

login.post("/login", (req: Request<LoginBody>, res) => {
    const { password, email } = req.body;

    if (!password || !email) {
        res.render("login", { error: "Tentativa de login inválida." });
        return;
    }

    const foundUser = users.find((user) => user.email === email);

    if (!foundUser || foundUser.password !== password) {
        res.render("login", { error: "Usuário ou senha incorreto." });
        return;
    }

    res.cookie(
        "session",
        JSON.stringify({ expiresIn: new Date().getTime() + 1000 * 10 }),
    );

    res.redirect("/");
});
