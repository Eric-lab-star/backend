import mongoose from "mongoose";

const db = mongoose.connection;

mongoose
  .connect("mongodb://127.0.0.1:27017/mybackend")
  .catch((error) => handleError(error));
db.on("error", (err) => {
  logError(err);
});

db.once("connected", () => console.log("connected to DB"));

export default db;
