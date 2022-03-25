var express = require("express");
var app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send({ message: "Connection Success" });
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(5000);
