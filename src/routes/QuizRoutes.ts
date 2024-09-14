import express from 'express';
import {
    getAllQuizzes,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuizByKeyword,
    addQuestionToQuiz,
    addQuestionsToQuiz
} from '../controllers/QuizController';

const router = express.Router();

router.get('/', getAllQuizzes);
router.get('/:quizId', getQuizById);
router.post('/', createQuiz);
router.put('/:quizId', updateQuiz);
router.delete('/:quizId', deleteQuiz);
router.get('/:quizId/populate', getQuizByKeyword);
router.post('/:quizId/question', addQuestionToQuiz);
router.post('/:quizId/questions', addQuestionsToQuiz);

export default router;