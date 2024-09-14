import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT: boolean = process.env['APP_ENV'] == 'development';

export const SERVER_HOST: string = process.env['SERVER_HOST'] || 'localhost';
export const SERVER_PORT: number = parseInt(
	process.env['SERVER_PORT'] || '3000',
);

export const DATABASE_URL: string =
	process.env['DATABASE_URL'] || 'mongodb://localhost:27017/SimpleQuiz';

export const server = {
	host: SERVER_HOST,
	port: SERVER_PORT,
	databaseUrl: DATABASE_URL,
};