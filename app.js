const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middlewave");
  next(); // Allows the request to continue to the next middlewave is line;
});

app.use((req, res, next) => {
  console.log("to the middlewave");
});

const server = http.createServer(app);

server.listen(3000);
