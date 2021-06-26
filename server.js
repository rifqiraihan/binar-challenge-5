const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser"); // Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});
app.get("/chapter3", (req, res) => {
  res.sendFile(__dirname + "/static/chapter-3.html");
});
app.get("/chapter4", (req, res) => {
  res.sendFile(__dirname + "/static/chapter-4.html");
});
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/static/home.html");
});

//LOGIN
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});
app.post("/login", (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;

  res.send(`Username: ${username} Password: ${password}`);
});
