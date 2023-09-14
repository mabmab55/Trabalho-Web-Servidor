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
app.use(product);

app.get("/not-found", (req, res) => {
    res.render("notFoundPage");
});

app.get("*", (req, res) => {
    res.redirect("/not-found");
});

app.listen(3000, () => console.log("server running on port 3000"));
