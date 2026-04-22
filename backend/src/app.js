require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("./config/passport");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:8080",
  credentials: true
}));

app.use(session({
  secret: "segredo",
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

module.exports = app;