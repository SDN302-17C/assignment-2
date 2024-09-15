import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT: boolean = process.env['APP_ENV'] == 'development';
export const SCHEMA: string = process.env['SCHEMA'] || 'http';
export const SERVER_HOST: string = process.env['SERVER_HOST'] || 'localhost';
export const SERVER_PORT: number = parseInt(
	process.env['SERVER_PORT'] || '3000',
);
export const SERVER_URL: string = `${SCHEMA}://${SERVER_HOST}:${SERVER_PORT}`;
export const DATABASE_URL: string =
	process.env['DATABASE_URL'] || 'mongodb://localhost:27017/SimpleQuiz';

export const server = {
	schema: SCHEMA,
	host: SERVER_HOST,
	port: SERVER_PORT,
	serverUrl: SERVER_URL,
	databaseUrl: DATABASE_URL,
};