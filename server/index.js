require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const port = 3001;

const app = express();
app.use(json());
app.use(cors());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //2 weeks
    }
  })
);
let myName = "Emmanuel";
app.put("/api/session", (req, res, next) => {
  if (req.body.name === myName) {
    req.session.username = req.body.name;
    res.status(200).json(req.session);
  } else {
    res.status(500).send(err => console.log(err));
  }
});

app.listen(port, () => {
  console.log(`Port ${port} is listening...`);
});
