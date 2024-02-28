import express from 'express';
import bodyParser from 'body-parser';
import logger from './logger';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger);

const todoRouter = import("./routes/todoRoutes");

app.use("/todo", todoRouter);

app.use('/', (req, res, next) => {
	try {
		console.info('default api path');
		return res.status(200).json({ success: true, message: 'todo app home.', data: [] });
	} catch (error) {
		throw error;
	}
});

export default app;
