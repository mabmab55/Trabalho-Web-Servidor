import { engine } from "express-handlebars";
import { app } from "./app";
import express from "express";
import { home } from "./routers";

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(home);

app.listen(3333, () => console.log("server running on port 3333"));
