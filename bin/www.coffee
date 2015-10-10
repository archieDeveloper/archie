#!/usr/bin/env coffee

app = require('../app')
debug = require('debug')('myapp:server')
http = require('http')

normalizePort = (val)->
  port = parseInt(val, 10)
  if (isNaN(port))
    return val
  if (port >= 0)
    return port
  return false

port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

server = http.createServer(app)

onError = (error)->
  if (error.syscall != 'listen')
    throw error
  bind = typeof port == 'string' ? 'Pipe ' + port : 'Port ' + port

  if (error.code == 'EACCES')
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
  else if (error.code == 'EADDRINUSE')
    console.error(bind + ' is already in use');
    process.exit(1);
  else
    throw error

onListening = ()->
  addr = server.address()
  bind = if typeof addr == 'string' then 'pipe ' + addr else 'port ' + addr.port
  debug('Listening on ' + bind)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)



