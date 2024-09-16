import { Request, Response } from 'express';
import axios from 'axios';
import handleError from '../../utils/HandleError';
import { SERVER_URL } from '../../config/ConfigServer';

const axiosInstance = axios.create({
  httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
});

export const getAllQuestions = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/api/questions`);
        const questions = response.data;
        res.render('questions/list', { questions: questions });
    } catch (error: any) {
        handleError(res, error);
    }
};

export const getQuestionByID = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/questions/${req.params['questionId']}`);
        res.render('questions/details', { question: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};

export const createQuestion = (req: Request, res: Response): void => {
    res.render('questions/new');
};

export const editQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/questions/${req.params['questionId']}`);
        res.render('question/edit', { question: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};