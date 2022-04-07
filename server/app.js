const express = require("express");
const services = require("./services");
const path = require("path");
const htmlToPdf = require("html-pdf");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (_, res) => {
  res.status(200).sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/generate", (req, res) => {
  const data = req.body;
  const html = services.createResume(data);
  const filename = `${data["personal"]["first-name"]}_${data["personal"]["last-name"]}_resume.pdf`;

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
          console.log(err);
          res.status(500).send({ message: "something went wrong" });
        }
      });
    });
});

app.listen(8000);
