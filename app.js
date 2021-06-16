const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/about", (req, res) => {
  res.json({ name: "Jonas Felipe", email: "jonas.felipe9584@gmail.com" });
});

app.get("/", (req, res) => {
  res.json({ msg: "OK" });
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
