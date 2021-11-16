import express from "express";
import { connectDB } from "./config/db.js";
import { router } from "./routes/product.js";

// create server
const app = express();

// connect DB
connectDB();

app.use("/api/products", router);

// define main route
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(4000, () => {
  console.log("The server is running");
});
