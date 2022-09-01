const express = require("express");
const dotenv = require("dotenv");
const { application } = require("express");
const result = require("./result");

dotenv.config();
const app = express();

//route
app.get("/", (req, res) => {
  res.send("welcome to our portal");
})

// get all result

app.get("/result", (req, res) => {
  res.jsonp(result);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
