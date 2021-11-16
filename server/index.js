import express from "express";

// create server
const app = express();

// defined main route
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(4000, () => {
  console.log("The server is running");
});
