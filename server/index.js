const express = require("express");
const app = express();
const controller = require("./Controller");
const authController = require("./authController");
const massive = require("massive");
require("dotenv").config();
const session = require("express-session");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("connected to db");
});

app.get(`/api/posts`, controller.getAllPosts);
app.post("/api/posts", controller.createPost);

app.listen(SERVER_PORT, () => {
  console.log(`server listening on port ${SERVER_PORT}`);
});
