const express = require("express");
const path = require("path");
const GuestsService = require("./guests-service");
const guestRouter = express.Router();
const jsonBodyParser = express.json();
const serializeGuests = (guest) => {
  return {
    firstname: guest.firstname,
    lastname: guest.lastname,
    plus_one: guest.plus_one,
    family: guest.family,
    note: guest.note,
  };
};
guestRouter.route("/").post(jsonBodyParser, (req, res, next) => {
  const { firstname, lastname } = req.body;
  const knex = req.app.get("db");
  //need to check capitalization of name from database and input
  GuestsService.isOnGuestList(knex, firstname, lastname)
    .then((name) => {
      //if name does not exist in database 
      if (name.length === 0) {
        return res
          .status(400)
          .json({ error: `Name incorrectly spelled or does not exist.` });
      } else {
        //name exists
        //if no group just return
        if (!name[0].family) {
          res.status(200).json(name);
        }
        //if in group get a family
        else {
          GuestsService.getFamily(knex, name[0].family)
            .then((data) => {
              res.status(200).json(data);
            })
            .catch(next);
        }
      }
    })
    .catch(next);
});

module.exports = guestRouter;

// if we found the person and they're in a group
// const response = {
//   note: 'oaisjdoiajsd',
//   people: [
//     {
//       id: 1,
//       firstname: "Charlie",
//       lastname: "Prum",
//       response: null,
//     },
//     {
//       id: 2,
//       firstname: "Something",
//       lastname: "Prum",
//       response: null,
//     },
//     {
//       id: 3,
//       firstname: "a",
//       lastname: "b",
//       response: null,
//     },
//   ],
// };

// const responsePlusOne = {
//   allow_plus_one: true,
//   people: [
//     {
//       id: 1,
//       firstname: "Charlie",
//       lastname: "Prum",
//       response: null,
//     },
//   ],
// };
