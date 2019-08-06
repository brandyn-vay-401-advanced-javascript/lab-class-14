
'use strict';

const express = require('express');
const auth = require('../auth/middleware.js');

const router = express.Router();

router.get('/profile', auth(), (req,res) => {
  res.status(200).send('Welcome to your Profile!');
});


module.exports = router;