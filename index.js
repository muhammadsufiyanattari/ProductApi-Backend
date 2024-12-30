import express from "express";
import { prodcuts } from "./ProductData.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/product", (req, res) => {
  //   res.send(`Muhammad Sufiyan ! ${req.params.id}`)
  res.send(prodcuts);
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
