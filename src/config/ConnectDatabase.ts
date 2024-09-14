import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const mongoURL = process.env.MONGO_URL;

    if (!mongoURL) {
        console.error('MONGO_URL environment variable is not set.');
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoURL);
        console.log(`Connected to MongoDB at ${mongoURL}`);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

export default connectDB;