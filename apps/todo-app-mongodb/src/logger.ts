import winston from 'winston';
import expressWinston from 'express-winston'
const { combine, timestamp, json, errors, colorize } = winston.format;

const logger = expressWinston.logger({
	level: 'info',
	format: combine(errors({ stack: true }), timestamp(), json(), colorize()),
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' }),
		new winston.transports.Console(),
	],
});

export default logger;

/** 
 * import winston from 'winston';
const { combine, timestamp, json, errors, colorize } = winston.format;

const logger = winston.createLogger({
	level: 'info',
	format: combine(errors({ stack: true }), timestamp(), json(), colorize()),
	defaultMeta: { service: 'user-service' },
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' }),
		new winston.transports.Console(),
	],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple(),
		})
	);
}

export default logger;

 */