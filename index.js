const fs = require("fs");
const express = require("express");
const port = process.env.PORT || 8080;

const app = express();

// READING OUR JSON FILE
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));
app.use(express.json());
// OUTPUTING THE JSON FILE
app.get("/", (req, res) => {
  res.type("json");
  res.status(200).send(data);
});

app.post("/", (req, res) => {
  if (req.body.operation_type === "addition") {
    res.type("json");
    res.status(200);
    res.send({
      slackUsername: "Godzie",
      result: Number(req.body.x) + Number(req.body.y),
      operation_type: req.body.operation_type,
    });
  }
  if (req.body.operation_type === "subtraction") {
    res.type("json");
    res.status(200);
    res.send({
      slackUsername: "Godzie",
      result: Number(req.body.x) - Number(req.body.y),
      operation_type: req.body.operation_type,
    });
  }
  if (req.body.operation_type === "multiplication") {
    res.type("json");
    res.status(200);
    res.send({
      slackUsername: "Godzie",
      result: Number(req.body.x) * Number(req.body.y),
      operation_type: req.body.operation_type,
    });
  }
  if (
    (req.body.operation_type =
      "Can you please add the following numbers together -13 and 25")
  ) {
    res.type("json");
    res.status(200);
    res.send({
      slackUsername: "Godzie",
      result: Number(req.body.x) + Number(req.body.y),
      operation_type: "addition",
    });
  }
});

// Listening on a port
app.listen(port, "localhost");
