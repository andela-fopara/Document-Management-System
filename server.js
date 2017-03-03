// server.js 
import express from 'express';
import path from 'path';
import logger from 'logger';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import index from './config/routes/index';

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '/build/views'));
app.set('view engine', 'jade');
console.log(__dirname);
app.use(express.static(path.join(__dirname, "/build")));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    //remember to create your own 
    // custom error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(8004, function() {
    console.log("Express Server Started listening on port", 8004);
})