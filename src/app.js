import express from "express";

const app = express();
const home = (req, res) => {
  return res.send("hello");
};

app.get("/", home);

app.listen(4000, () =>
  console.log(`app is listening to http://localhost:4000`)
);
