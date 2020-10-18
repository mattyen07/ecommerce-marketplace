var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const { ExpressPeerServer } = require('peer');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let createUserRouter = require('./routes/create_user');
let createShopRouter = require('./routes/create_shop');

// change this to change the URl of the database
const dbURL = 'mongodb://localhost:27017/dubhacks2020';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/create_user', createUserRouter);
app.use('/create_shop', createShopRouter);


//WebRTC server
const server = app.listen(9001);
const peerServer = ExpressPeerServer(server, {
  path: '/videoChat'
});
app.use('/', peerServer);


//Debugging purposes
peerServer.on('connection', function (id) {
  console.log('User connected with #', id);
});

peerServer.on('disconnect', function (id) {
  console.log('User disconnected with #', id);
});


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

// start database connection
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Database connected!");
});

module.exports = app;
