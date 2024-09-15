import express from "express";
import {
  getAllQuizzes,
  getQuizById,
  renderCreateQuizForm,
  createQuiz,
  renderEditQuizForm,
  updateQuiz
} from "../../controllers/view/QuizController";

const router = express.Router();

router.get("/", getAllQuizzes);
router.get("/:quizId", getQuizById);
router.get("/new-quiz", renderCreateQuizForm);
router.post("/", createQuiz);
router.get("/:quizId/edit", renderEditQuizForm);
router.put("/:quizId", updateQuiz);

export default router;