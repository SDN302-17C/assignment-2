import express from 'express';
import {
    getAllQuestions,
    getQuestionByID,
    renderCreateQuestionForm,
    createQuestion,
    renderEditQuestionForm,
    updateQuestion
} from '../../controllers/view/QuestionController';

const router = express.Router();

router.get('/', getAllQuestions);
router.get('/:questionId', getQuestionByID);
router.get('/new-question', renderCreateQuestionForm);
router.post('/', createQuestion);
router.get('/:questionId/edit', renderEditQuestionForm);
router.put('/:questionId', updateQuestion);

export default router;