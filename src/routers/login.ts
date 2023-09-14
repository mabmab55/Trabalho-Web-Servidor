import { Router } from "express";
import { Request } from "../@types";
import { users } from "../db";
import { isLogged, validator } from "../utils";

export const login = Router();

login.get("/login", (req, res) => {
    if (isLogged(req.cookies.session)) {
        res.redirect("/");
        return;
    }

    res.render("login", { layout: "public" });
});

login.get("/signup", (req, res) => {
    if (isLogged(req.cookies.session)) {
        res.redirect("/");
        return;
    }

    res.render("signup", { layout: "public" });
});

login.get("/logout", (req, res) => {
    res.clearCookie("session");

    res.redirect("/login");
});

interface SignupBody {
    email?: string;
    password?: string;
}

login.post("/login", (req: Request<SignupBody>, res) => {
    const { password, email } = req.body;

    if (!password || !email) {
        res.render("login", {
            error: "Tentativa de login inválida.",
            layout: "public",
        });
        return;
    }

    const foundUser = users.find((user) => user.email === email);

    if (!foundUser || foundUser.password !== password) {
        res.render("login", {
            error: "Usuário ou senha incorreto.",
            layout: "public",
        });
        return;
    }

    res.cookie(
        "session",
        JSON.stringify({
            email,
            expiresIn: new Date().getTime() + 1000 * 60 * 60,
        }),
    );

    res.redirect("/");
});

interface SignupBody {
    name?: string;
    email?: string;
    password?: string;
}

login.post("/signup", (req: Request<SignupBody>, res) => {
    const { email, name, password } = req.body;

    if (!validator.isValidEmail(email)) {
        res.render("signup", {
            error: {
                email: "Email inválido",
            },
            layout: "public",
        });
        return;
    }

    if (!validator.isValidPassword(password)) {
        res.render("signup", {
            error: {
                password: "Senha inválida! Deve ser maior que 4 caracteres.",
            },
            layout: "public",
        });
        return;
    }

    if (!validator.isString(name) || !name) {
        res.render("signup", {
            error: {
                name: "Nome inválido!",
            },
            layout: "public",
        });

        return;
    }

    res.cookie(
        "session",
        JSON.stringify({
            email,
            expiresIn: new Date().getTime() + 1000 * 60 * 60,
        }),
    );

    users.push({
        email,
        name,
        password,
        isAdmin: false,
    });

    res.render("successLogin", { layout: "public" });
});
