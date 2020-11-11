require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const guestRouter = require("./guests/guests-router");
const notesRouter = require("./submissions/notes-router");
const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use("/rsvp", guestRouter);
app.use("/update", notesRouter);

app.use((error, req, res, next) => {
  //eslint-disable-line no-unused-vars
  let message;
  if (NODE_ENV === "production") {
    message = { error: { message: "server error" } };
  } else {
    console.error(error);
    message = { message: error.message, error };
  }
  res.status(500).json(message);
});

module.exports = app;
