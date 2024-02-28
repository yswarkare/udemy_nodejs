import http from 'http';
import { port } from './config/index';
import connectToDb from './db';
import app from './app';

const startServer = async () => {
	try {
		await connectToDb();
		http.createServer(app).listen(port);
		console.log('server started successfully!');
		console.log('app is running on port = ' + port);
	} catch (err) {
		console.log({ err });
		console.error(err);
		throw err;
	}
};

startServer();
