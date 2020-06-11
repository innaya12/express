// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var apartmentsRouter = require("./routes/apartmentsRoute");
var addapartmentRouter = require("./routes/addapartmentRouter");
var byUserRouter = require("./routes/apartmentbyuser");
var citiesRouter = require("./routes/citiesRoute");
var countriesRouter = require("./routes/countriesRoute");
var getImagesRouter = require("./routes/imagesRoute");
var indexRouter = require("./routes/indexRoute");
var loginRouter = require("./routes/loginRouter");
var uploadimagesRouter = require("./routes/uploadimagesRouter");
var signupRouter = require("./routes/signupRouter");
var usersRouter = require("./routes/usersRoute");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(cors());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/", indexRouter);
app.use("/apartments", apartmentsRouter);
app.use("/byuserid", byUserRouter);
app.use("/addapartment", addapartmentRouter);
app.use("/cities", citiesRouter);
app.use("/countries", countriesRouter);
app.use("/images", getImagesRouter);
app.use("/uploadimages", uploadimagesRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);

console.log("Just to check if its running");

module.exports = app;
