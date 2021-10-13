const express = require("express");
const bodyParser = require("body-parser");
const router = require('./src/api');
const mongoose = require("mongoose");
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const baseApiUrl = process.env.NODE_ENV || '/api';

const app = express();

async function start() {
  try {
    await mongoose.connect("mongodb+srv://Admin:Test12345@cluster0.03dog.mongodb.net/test")
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(baseApiUrl, router);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Page not found!' });
});

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

start();