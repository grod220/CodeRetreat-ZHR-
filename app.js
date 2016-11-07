'use strict';

const express = require('express'),
    morgan = require('morgan'),
    chalk = require('chalk');

var app = express();
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/test', function (req, res) {
  res.send('You\'ve reached the test page.');
});

app.listen(3000, function () {
  console.log(chalk.blue('APP listening on port ' + 3000 + '! ♪♩♫♯♭'));
});
