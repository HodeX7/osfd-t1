const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  let random = Math.floor(Math.random() * 100000000) + 1;
  res.json({ users: [random] });
});

app.listen(1234, () => {
  console.log("Server is running on 1234");
});
