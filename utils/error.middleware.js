var createError = require('http-errors');

// catch 404 and forward to error handler
const notFoundHandler = (req, res, next) => {
    next(createError(404));
}
  
// error handler
const errorHandler = (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // send the error message
    res.status(err.status || 500);
    res.send(err.message);
}

module.exports = {
    notFoundHandler,
    errorHandler
}
