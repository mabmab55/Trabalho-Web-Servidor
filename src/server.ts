import { engine } from "express-handlebars";
import { app } from "./app";
import express, { NextFunction, Response } from "express";
import { home, login, products } from "./routers";
import path from "path";
import cookieParser from "cookie-parser";
import { Database } from "./db";
import { isLogged } from "./utils";
import { Request } from "./@types";
import { AppError } from "./error";
import "express-async-errors";

Database.getInstance();

app.engine(
    "hbs",
    engine({
        defaultLayout: "main",
        extname: ".hbs",
        partialsDir: path.join(__dirname, "/views/partials"),
    }),
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    if (["/login", "/signup"].includes(req.path)) {
        next();
        return;
    }

    if (!isLogged(req.cookies.session)) {
        res.redirect("/login");
    } else {
        res.locals.email = JSON.parse(req.cookies.session).email;
        next();
    }
});

app.use(home);
app.use(login);
app.use(products);

app.get("/not-found", (_, res) => {
    res.render("notFoundPage");
});

app.get("*", (_, res) => {
    res.redirect("/not-found");
});

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
    if (!err) {
        next(err);
    }

    if (err instanceof AppError) {
        res.status(err.statusCode).render("error");
        return;
    }

    res.status(500).render("error");
});

app.listen(3000, () => console.log("server running on port 3000"));
