import express from "express";

import { engine } from "express-handlebars";

const app = express();

app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
	res.render("home");
});


app.listen(3333, () => console.log("server running on port 3333"));
