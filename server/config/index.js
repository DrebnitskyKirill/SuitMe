require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { cookiesCleaner, local } = require('../middleware/auth');
const cors = require('cors')

const sessionConfig = {
  store: new FileStore(),
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'elbrus_bears',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(cookiesCleaner);
  app.use(local);
  app.use(cors())

};

module.exports = config;
