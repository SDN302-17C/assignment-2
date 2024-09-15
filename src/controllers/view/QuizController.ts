import { Request, Response } from "express";
import axios from "axios";
import handleError from "../../utils/HandleError";
import { SERVER_URL } from "../../config/ConfigServer";

const axiosInstance = axios.create({
  httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
});

export const getAllQuizzes = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/quizzes`);
        res.render('quizzes/list', { quizzes: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};

export const getQuizById = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/quizzes/${req.params['quizId']}`);
        res.render('quizzes/detail', { quiz: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};

export const createQuiz = (req: Request, res: Response): void => {
    res.render('quizzes/new');
};

export const editQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/quizzes/${req.params['quizId']}`);
        res.render('quizzes/edit', { quiz: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};