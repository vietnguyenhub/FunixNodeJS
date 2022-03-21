const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runes!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("to the middlewave");
  res.send('<h1>The "Add Product" Page</h1>');
});
app.use("/", (req, res, next) => {
  console.log("to the middlewave");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
