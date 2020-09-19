const express = require('express');
const router = express.Router();
const generateRandomString = require('../lib/helperFunctions');

//Create new poll
// router.post('/', (req, res) => {
//generate link
// const adminID = generateRandomString();
// const voterID = generateRandomString();
// let options = [];

// const newPoll = {
//   email: req.body.email,
//   title: req.body.title,
//   adminURL: adminID,
//   voterURL: voterID,
//   voteCount: 0
// };

//create new poll
router.get("/", (req, res) => {
  res.render('polls');
});

//submit new poll
router.post('/', (req, res) => {
  console.log(req.body.user_email, req.body.poll_title, req.body.poll_question);
  res.redirect('created');
});

//display links for admin (view poll results) and share link (for voting)
router.get('/created', (req, res) => {
  res.render('created');
});

module.exports = router;