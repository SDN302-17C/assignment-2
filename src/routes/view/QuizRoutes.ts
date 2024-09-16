import express from "express";
import methodOverride from 'method-override';
import {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  postQuiz,
  editQuiz,
  updateQuiz,
  deleteQuiz
} from "../../controllers/view/QuizController";

const router = express.Router();

router.use(methodOverride('_method'));

router.get("/", getAllQuizzes);
router.get("/new", createQuiz);
router.post("/", postQuiz);
router.get("/:quizId", getQuizById);
router.get("/:quizId/edit", editQuiz);
router.put("/:quizId", updateQuiz);
router.delete("/:quizId", deleteQuiz);

export default router;