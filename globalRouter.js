import express from "express";
import { getHome, postHome, upload } from "./controler";
const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.post("/", upload.single("image"), postHome);

export default globalRouter;
