import mongoose, { Schema, Document } from 'mongoose';
import { Question } from './Question';

interface IQuiz extends Document {
    title: string;
    description: string;
    questions: mongoose.Types.ObjectId[];
}

const QuizSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: Question }]
});

export const Quiz = mongoose.model<IQuiz>('Quiz', QuizSchema);