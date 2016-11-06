'use strict';

const express = require('express'),
    morgan = require('morgan'),
    chalk = require('chalk');

var app = express();
app.use(morgan('dev'));
app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.send('???');
// });

app.listen(3000, function () {
  console.log(chalk.blue('APP listening on port ' + 3000 + '! ♪♩♫♯♭'));
});
