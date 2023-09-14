import { engine } from "express-handlebars";
import { app } from "./app";
import express from "express";
import { home, login, products, product } from "./routers";
import path from "path";
import cookieParser from "cookie-parser";
import { isLogged } from "./utils";

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
