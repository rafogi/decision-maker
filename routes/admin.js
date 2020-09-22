const express = require('express');
const router = express.Router();

module.exports = function(database) {
  router.get("/:pollId", (req, res) => {
    const pollId = req.params.pollId
    database.getPolls(pollId)
    .then((result) =>{
      const promiseArray = result.map(option => {
        return database.getTotalRank(option.id,pollId)
      })
      return Promise.all(promiseArray)
      .then((result) => {
          console.log(result)
          res.render("poll_admin");
        })
    })
  });

  return router;
};
