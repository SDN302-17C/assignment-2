import express from 'express';
import {
    getAllQuestions,
    getQuestionByID,
    createQuestion,
    editQuestion
} from '../../controllers/view/QuestionController';

const router = express.Router();

router.get('/', getAllQuestions);
router.get('/view', getQuestionByID);
router.post('/new', createQuestion);
router.put('/edit', editQuestion);

export default router;