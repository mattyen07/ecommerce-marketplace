var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let createUserRouter = require('./routes/create_user');
let createShopRouter = require('./routes/create_shop');
let shopsRouter = require('./routes/shops');
let authenticationRouter = require('./routes/authentication');
const databaseHelpers = require('./helpers/databaseGet');

// create this file and create the field, fill with db link (can be localhost if hosting locally)
const dbURL = require('./config.json').azure_db_link;

var app = express();
const server = require('http').Server(app)
const io = require('socket.io').listen(server)

app.set('view engine', 'ejs')
app.use(express.static('public'))

/*
PARAMS:
shop's email
*/

app.get('/', async (req, res) => {
    let roomID = "AndreaCandyShop"
    res.redirect(302, `/${roomID}`);
})


app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(9001)

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/authentication', authenticationRouter);
app.use('/create_user', createUserRouter);
app.use('/create_shop', createShopRouter);
app.use('/shops', shopsRouter);

// //WebRTC server
// const server = app.listen(9001);
// const peerServer = ExpressPeerServer(server, {
//   path: '/videoChat'
// });
// app.use('/', peerServer);


// //Debugging purposes
// peerServer.on('connection', function (id) {
//   console.log('User connected with #', id);
// });

// peerServer.on('disconnect', function (id) {
//   console.log('User disconnected with #', id);
// });


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
