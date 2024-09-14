import express from 'express';
import morgan from 'morgan';
import quizRoutes from './routes/QuizRoutes';
import questionRoutes from './routes/QuestionRoutes';
import connectDB from './config/ConnectDatabase';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

app.use(express.json());
app.use(morgan('dev'));

app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});