import { Request, Response } from 'express';
import axios from 'axios';
import handleError from '../../utils/HandleError';
import { SERVER_URL } from '../../config/ConfigServer';


const axiosInstance = axios.create({
  httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
});

export const getAllQuestions = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/questions`);
        res.render('questions/list', { questions: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};


export const getQuestionByID = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/questions/${req.params['questionId']}`);
        res.render('questions/detail', { question: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};


export const renderCreateQuestionForm = (req: Request, res: Response): void => {
    res.render('questions/new-question');
};


export const createQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.post(`${SERVER_URL}/questions`, req.body);
        res.redirect('/questions');
    } catch (error: any) {
        handleError(res, error);
    }
};


export const renderEditQuestionForm = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/questions/${req.params['questionId']}`);
        res.render('question/edit', { question: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};


export const updateQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.put(`${SERVER_URL}/questions/${req.params['questionId']}`, req.body);
        res.redirect(`/questions/${req.params['questionId']}`);
    } catch (error: any) {
        handleError(res, error);
    }
};