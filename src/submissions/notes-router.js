const NotesService = require("./notes-service");
const express = require("express");
const notesRouter = express.Router();
const jsonBodyParser = express.json();

notesRouter.route("/").post(jsonBodyParser, (req, res, next) => {
  const updates = req.body.map((person) => {
    const { firstname, lastname, response, plus_one, note } = person;
    const knex = req.app.get("db");
    console.log([firstname, lastname, response, plus_one, note]);
    return NotesService.updateStatus(
      knex,
      firstname,
      lastname,
      response,
      plus_one,
      note
    )
  });

  //handle a group of responses per family
  Promise
    .all(updates)
    .then(() => {
        res.status(201).json({})
    }).catch(next)
});

module.exports = notesRouter;
