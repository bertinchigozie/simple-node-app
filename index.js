const fs = require("fs");
const express = require("express");
const port = process.env.PORT || 8000;

const app = express();
// READING OUR JSON FILE
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

// OUTPUTING THE JSON FILE
app.get("/", (req, res) => {
  res.type("json");
  res.status(200).send(data);
});
app.get("/api", (req, res) => {
  res.type("json");
  res.status(200).send(data);
});

// Listening on a port
app.listen(port, "localhost");
