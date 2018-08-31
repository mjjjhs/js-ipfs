'use strict'

module.exports = (server) => {
  require('./version')(server)
  require('./shutdown')(server)
  require('./bootstrap')(server)
  require('./pin')(server)
  require('./repo')(server)
  require('./config')(server)
  require('./ping')(server)
  require('./swarm')(server)
  require('./bitswap')(server)
  require('./file')(server)
  require('./files')(server)
  require('./pubsub')(server)
  require('./debug')(server)
  require('./webui')(server)
  require('./dns')(server)
  require('./key')(server)
  require('./stats')(server)
  require('./resolve')(server)
  require('./name')(server)
}
