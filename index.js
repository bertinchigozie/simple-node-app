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
app.get("/api", (req, res) => {
  res.type("html");
  res.status(200).send(`
  <html>
      <body>
          <form method="post" action="https://simple-node-app-cg6k.onrender.com">Name: 
              <input type="text" name="name" />
              <input type="number" value="Submit" />
              <input type="number" value="Submit" />
              <input type="button" value="Submit" />
          </form>
      </body>
  </html>`);
});

app.post("/api", (req, res) => {
  if (req.body.operation_type === "+") {
    res.type("json");
    res.status(201);
    res.send({
      slackname: "Godzie",
      operation_type: req.body.operation_type,
      result: Number(req.body.x) * Number(req.body.y),
    });
  }
  if (req.body.operation_type === "-") {
    res.type("json");
    res.status(201);
    res.send({
      slackname: "Godzie",
      operation_type: req.body.operation_type,
      result: Number(req.body.x) * Number(req.body.y),
    });
  }
  if (req.body.operation_type === "*") {
    res.type("json");
    res.status(201);
    res.send({
      slackname: "Godzie",
      operation_type: req.body.operation_type,
      result: Number(req.body.x) * Number(req.body.y),
    });
  }
});

// Listening on a port
app.listen(port, "localhost");
