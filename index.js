import express from "express";
import multer from "multer";
import globalRouter from "./globalRouter";
const app = express();

app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/", globalRouter);
app.listen(4000, console.log(" http://localhost:4000"));
