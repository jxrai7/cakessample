var createError = require('http-errors');
var express = require('express');
<<<<<<< HEAD

var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var logger = require('morgan');
require('dotenv').config();
require('./config/database');
require('./config/passport');
=======
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
require('./config/database');

>>>>>>> 823824543cc426c6ce8325dacd6b2cfd6cf5169e
var User = require("./User")

run()
async function run() {
  const user = new User({name: "Kelly", years: 2})
  await user.save()
  console.log(user)
}

<<<<<<< HEAD
var app = express();
=======

>>>>>>> 823824543cc426c6ce8325dacd6b2cfd6cf5169e


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

<<<<<<< HEAD

=======
var app = express();
>>>>>>> 823824543cc426c6ce8325dacd6b2cfd6cf5169e

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
app.use(session({
  secret: 'Cakes!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
=======
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
>>>>>>> 823824543cc426c6ce8325dacd6b2cfd6cf5169e

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
