const express = require("express")
const passport = require("passport")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv").config

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// CORS support
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next()
})

app.use(passport.initialize())

// variable for server routes
const mainRoutes = require("./routes/main")
app.use(mainRoutes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})