import express from 'express';
import methodOverride from 'method-override';
import {
    getAllQuestions,
    getQuestionByID,
    createQuestion,
    editQuestion,
    deleteQuestionById
} from '../../controllers/view/QuestionController';

const router = express.Router();

router.use(methodOverride('_method'));

router.get('/', getAllQuestions);
router.get('/new', createQuestion);
router.get('/:questionId', getQuestionByID);
router.get('/:questionId/edit', editQuestion);
router.delete('/:questionId', deleteQuestionById);

export default router;