import { Request, Response } from "express";
import axios from "axios";
import handleError from "../../utils/HandleError";
import { SERVER_URL } from "../../config/ConfigServer";

const axiosInstance = axios.create({
  httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
});

// GET /quizzes
export const getAllQuizzes = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/quizzes`);
        res.render('quizzes/list', { quizzes: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};

// GET /quizzes/:quizId
export const getQuizById = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/quizzes/${req.params['quizId']}`);
        res.render('quizzes/detail', { quiz: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};

// GET /quizzes/new
export const renderCreateQuizForm = (req: Request, res: Response): void => {
    res.render('quizzes/new');
};

// POST /quizzes
export const createQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.post(`${SERVER_URL}/quizzes`, req.body);
        res.redirect('/quizzes');
    } catch (error: any) {
        handleError(res, error);
    }
};

// GET /quizzes/:quizId/edit
export const renderEditQuizForm = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/quizzes/${req.params['quizId']}`);
        res.render('quizzes/edit', { quiz: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};

// PUT /quizzes/:quizId
export const updateQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.put(`${SERVER_URL}/quizzes/${req.params['quizId']}`, req.body);
        res.redirect(`/quizzes/${req.params['quizId']}`);
    } catch (error: any) {
        handleError(res, error);
    }
};