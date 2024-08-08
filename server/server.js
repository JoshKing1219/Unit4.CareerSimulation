const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send({ message: "Running..." });
});

module.exports = server;
