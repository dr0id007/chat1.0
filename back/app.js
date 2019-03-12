const express = require("express");
const app = express();
const body = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(body.json());
app.use(cors());

const url = "mongodb://localhost:27017/chat_api";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

mongoose.connect(url, { useNewUrlParser: true }, err => {
  if (err) console.log("error connectng to db ..");
  else console.log("successfully connected..!!");
});

const user = mongoose.model("chat", schema);

app.get("/", (req, res) => {
  console.log("someone connected..");
  res.send("welcome.");
});

app.get("/api/get", (req, res) => {
  console.log("get called");
  user.find({}, (err, data) => {
    if (err) return res.send("error");
    else return res.send(data);
  });
});

app.post("/api/post", (req, res) => {
  console.log("post called");
  console.log("name:-", req.body.name);
  console.log("message:-", req.body.message);

  if (req.body.name && req.body.message) {
    user.create(
      {
        name: req.body.name,
        message: req.body.message
      },
      (err, data) => {
        if (err) {
          console.log("error" + err);
          res.send("error");
        } else {
          console.log("success..", data);
          res.send("data added:-" + data);
        }
      }
    );
  } else res.send("name and message required..!!");
});

app.listen(2222);
