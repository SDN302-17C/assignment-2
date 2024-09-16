import express from 'express';
import {
    getAllQuestions,
    getQuestionByID,
    createQuestion,
    editQuestion
} from '../../controllers/view/QuestionController';

const router = express.Router();

router.get('/', getAllQuestions);
router.get('/new', createQuestion);
router.get('/:questionId', getQuestionByID);
router.get('/:questionId/edit', editQuestion);

export default router;