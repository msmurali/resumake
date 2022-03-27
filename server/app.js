const express = require("express");
const services = require("./services");
const path = require("path");
const htmlToPdf = require("html-pdf");

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send({ message: "Connection Success" });
});

app.post("/create", (req, res) => {
  const data = req.body;
  const html = services.createResume(data);
  console.log(html);
  const filename = `${data["personal-info"]["first-name"]}_${data["personal-info"]["last-name"]}_resume.pdf`;

  const options = {
    root: path.join(__dirname),
  };

  htmlToPdf
    .create(html, { format: "A4" })
    .toFile(`./outputs/${filename}`, (error, _) => {
      if (error) {
        res.status(500).send({ message: "something went wrong" });
      }
      res.sendFile(`./outputs/${filename}`, options, (err) => {
        if (err) {
          res.status(500).send({ message: "something went wrong" });
        }
      });
    });
});

app.listen(5000);
