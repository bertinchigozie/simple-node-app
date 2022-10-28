const fs = require("fs");
const express = require("express");

const app = express();
// Reading our json file
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

app.get("/", (req, res) => {
  res.status(200).json(data);
});
app.get("/api", (req, res) => {
  res.status(200).json(data);
});

// Listening on a port
const port = 8000;
app.listen(port, "localhost");
