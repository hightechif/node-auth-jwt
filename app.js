const express = require('express');
const morgan = require('morgan');
// const passport = require('./lib/passport');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Menggunakan Middleware Passport
// app.use(passport.initialize());

// Routing
const router = require('./routes/index.routes');
app.use(router);

module.exports = app;
