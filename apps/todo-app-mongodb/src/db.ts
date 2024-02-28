import { MongoURI } from './config';
import mongoose from 'mongoose';

const connectToDb = async () => {
	try {
		console.log({ MongoURI });
		if (MongoURI) {
			await mongoose.connect(MongoURI);
			console.info('Successfully connected to database');
		} else {
			throw new Error('MongoURI is undefined.');
		}
	} catch (error) {
		throw new Error('Failed to connect to database!');
	}
};

export default connectToDb;
