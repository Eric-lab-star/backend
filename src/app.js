import express from "express";
import "./db";

import homeRouter from "./routers/home";
const app = express();
const home = (req, res) => {
  return res.render("home");
};

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.set(express.urlencoded({ extended: true }));
app.get("/", homeRouter);

app.listen(4000, () =>
  console.log(`app is listening to http://localhost:4000`)
);
