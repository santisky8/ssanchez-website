//module dependencies
var configDB = require('./config/db');
var app = require('./config/app');
var debug = require('debug')('comp229.003.m2022:server');
var http = require('http');
const configurePassport = require('./config/passport');
const http = require('http');

//port retrieved from environment and stored in express 
var db = configDB();
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//http server
var server = http.createServer(app);

//port provided listener for all interfaces network
const passport = configurePassport();
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// port normalization into a number, string, or false
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

// error event listener 
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
//event listening listener for http
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log(`Express app running on http://localhost:${port}`)
  }
