const dotenv = require('dotenv').config({ path: 'variables.env' });
const logger = require('./logger');
const setup = require('./setup');
// run setup
try{
    setup.init()
}catch(err){
    logger.error(`Critical Error - Server Stoppping ${err}`);
    process.exit();
}

  logger.info('Server Started');