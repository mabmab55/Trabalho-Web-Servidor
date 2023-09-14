import { engine } from "express-handlebars";
import { app } from "./app";
import express from "express";
import { home, login, products, product } from "./routers";
import path from "path";
import cookieParser from "cookie-parser";

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

function isLogged(session: string | undefined): boolean {
    return !!session && JSON.parse(session).expiresIn >= new Date().getTime();
}

app.all("/", (req, res, next) => {
    if (!isLogged(req.cookies.session)) {
        res.redirect("/login");
    } else {
        next();
    }
});

app.use(home);
app.use(login);
app.use(products);
app.use(product);

app.listen(3000, () => console.log("server running on port 3000"));
