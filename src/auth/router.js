'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');
const oauth = require('./oauth/google.js');

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    })
    .catch(next);
});

authRouter.post('/signin', auth(), (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.get('/oauth', (req,res,next) => {
  oauth.authorize(req)
    .then( token => {
      res.status(200).send(token);
    })
    .catch(next);
});

authRouter.post('/key', auth, (req,res,next) => {
  let key = req.user.generateKey();
  res.status(200).send(key);
});

authRouter.get('/public-stuff', (req,res) => {
  res.status(200).send('Welcome to the Public!');
});

authRouter.get('/hidden-stuff', auth(), (req, res) => {
  res.status(200).send('Welcome to the Hidden Room!');
});

authRouter.get('/something-to-read', auth('read'), (req, res) => {
  res.status(200).send('You can now Read Things!');
});

authRouter.get('/create-a-thing', auth('create'), (req, res) => {
  res.status(200).send('You can now Make Things!');
});

authRouter.get('/update', auth('update'), (req, res) => {
  res.status(200).send('You can now Update Things!');
});

authRouter.get('/jp', auth('update'), (req, res) => {
  res.status(200).send('You can now Update More Things!');
});

authRouter.get('/bye-bye', auth('delete'), (req, res) => {
  res.status(200).send('You can now Delete Things!');
});

authRouter.get('/everything', auth('superuser'), (req, res) => {
  res.status(200).send('You are now a SUPERUSER!');
});

authRouter.post('/roles', (req, res, next) => {
  let role = new Role(req.body);
  role.save()
    .then(role => res.send(role);
    )
    .catch(next);
});

module.exports = authRouter;
