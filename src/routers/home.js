import express from "express";
import { main } from "../controllers/main";
const homeRouter = express.Router();

homeRouter.get("/", main);

export default homeRouter;
