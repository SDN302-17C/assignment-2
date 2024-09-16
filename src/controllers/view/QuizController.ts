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
        const response = await axiosInstance.get(`${SERVER_URL}/api/quizzes`);
        const quizzes = response.data;
        res.render('quizzes/list', { quizzes: quizzes });
    } catch (error: any) {
        handleError(res, error);
    }
};

// GET /quizzes/:quizId
export const getQuizById = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/api/quizzes/${req.params['quizId']}`);
        const quiz = response.data;
        res.render('quizzes/details', { quiz: quiz });
    } catch (error: any) {
        handleError(res, error);
    }
};

// GET /quizzes/new
export const createQuiz = (req: Request, res: Response): void => {
    res.render('quizzes/new');
};

// POST /quizzes
export const postQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.post(`${SERVER_URL}/api/quizzes`, req.body);
        res.redirect(`/quizzes/${response.data._id}`);
    } catch (error: any) {
        handleError(res, error);
    }
};

// GET /quizzes/:quizId/edit
export const editQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.get(`${SERVER_URL}/api/quizzes/${req.params['quizId']}`);
        res.render('quizzes/edit', { quiz: response.data });
    } catch (error: any) {
        handleError(res, error);
    }
};

// PUT /quizzes/:quizId
export const updateQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axiosInstance.put(`${SERVER_URL}/api/quizzes/${req.params['quizId']}`, req.body);
        res.redirect(`/quizzes/${response.data._id}`);
    } catch (error: any) {
        handleError(res, error);
    }
};

// DELETE /quizzes/:quizId
export const deleteQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        await axiosInstance.delete(`${SERVER_URL}/api/quizzes/${req.params['quizId']}`);
        res.redirect('/quizzes');
    } catch (error: any) {
        handleError(res, error);
    }
};