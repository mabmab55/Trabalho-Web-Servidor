import { engine } from "express-handlebars";
import { app } from "./app";
import express from "express";
import { home } from "./routers";
import path from "path";
import cookieParser from "cookie-parser";

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(home);

app.listen(3000, () => console.log("server running on port 3000"));
