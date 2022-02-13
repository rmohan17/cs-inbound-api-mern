const { createLogger, format, transports } = require("winston");
const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.Console({})],
});

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const URL_CS_DEV = process.env.URL_CS_DEV;

module.exports = {PORT,URL_CS_DEV,logger};