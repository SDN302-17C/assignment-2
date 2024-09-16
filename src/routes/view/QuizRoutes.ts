import express from "express";
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

router.get("/", getAllQuizzes);
router.get("/new", createQuiz);
router.post("/", postQuiz);
router.get("/:quizId", getQuizById);
router.get("/:quizId/edit", editQuiz);
router.put("/:quizId", updateQuiz);
router.delete("/:quizId", deleteQuiz);

export default router;