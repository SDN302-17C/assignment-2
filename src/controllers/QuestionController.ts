import { Request, Response } from 'express';
import { Question } from '../models/Question';
import handleError from '../utils/HandleError';

// GET /questions
export const getAllQuestions = async (req: Request, res: Response): Promise<void> => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error: any) {
        handleError(res, error);
    }
};

// POST /questions
export const createQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).json(question);
    } catch (error: any) {
        handleError(res, error);
    }
};

// PUT /questions/:questionId
export const updateQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const question = await Question.findByIdAndUpdate(req.params.questionId, req.body, { new: true });
        question ? res.json(question) : res.status(404).json({ message: 'Question not found' });
    } catch (error: any) {
        handleError(res, error);
    }
};

// DELETE /questions/:questionId
export const deleteQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const question = await Question.findByIdAndDelete(req.params.questionId);
        question ? res.status(204).send() : res.status(404).json({ message: 'Question not found' });
    } catch (error: any) {
        handleError(res, error);
    }
};