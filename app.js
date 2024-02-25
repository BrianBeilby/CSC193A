"use strict";
const express = require("express");
const app = express();

app.get("/math/circle/:r", (req, res) => {
  const r = parseFloat(req.params.r);
  const area = Math.PI * r * r;
  const circumference = 2 * Math.PI * r;
  res.json({ area, circumference });
});

app.get("/hello/name", (req, res) => {
  const first = req.query.first;
  const last = req.query.last;

  if (!first && !last) {
    res.status(400).send("Missing Required GET parameters: first, last");
  } else if (!first) {
    res.status(400).send("Missing Required GET parameter: first");
  } else if (!last) {
    res.status(400).send("Missing Required GET parameter: last");
  } else {
    res.type("text").send(`Hello ${first} ${last}`);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
