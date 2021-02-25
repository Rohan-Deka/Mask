const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.listen(3000, function () {
  console.log("Server Started at port 3000");
});
