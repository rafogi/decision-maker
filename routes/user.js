const express = require('express');
const router = express.Router();

const dummy = {
  poll_title: 'This is dumb',
  poll_question: 'What is your quest?',
  option : [
    'dumb1', 'dumber2', 'reallydumb'
  ]
}

module.exports = function(database) {
  router.get("/:pollId", (req,res) => {
    const templateLiteral = {dummy}
    res.render("vote", templateLiteral);
  })

  router.post("/email_check", (req,res) => {
    database.getUserIdWithEmail(req.body.email)
    .then ((res) => {
      if (res === null) {
        database.addUser(req.body.email)
      }
    })
  })

  router.post("/:pollId", (req,res) => {
    //big fat query
    res.render('vote_confirm');
  })




return router;
}
