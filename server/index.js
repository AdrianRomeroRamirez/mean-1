import express from "express";
import { connectDB } from "./config/db.js";

// create server
const app = express();

// connect DB
connectDB();

// define main route
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(4000, () => {
  console.log("The server is running");
});
