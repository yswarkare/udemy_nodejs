import 'dotenv/config';

export const port = process.env.PORT;

let MongoURI: string = '';

if (typeof process.env.MongoURI === 'string') {
	MongoURI = process.env.MongoURI;
}

export { MongoURI };
