const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/game', (req, res) => {
  res.render('game');
});

module.exports = router;
