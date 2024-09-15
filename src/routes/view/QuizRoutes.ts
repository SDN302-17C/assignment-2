import express from "express";
import {
  getAllQuizzes,
  getQuizById,
  createQuiz,
editQuiz
} from "../../controllers/view/QuizController";

const router = express.Router();

router.get("/", getAllQuizzes);
router.get("/view", getQuizById);
router.post("/new", createQuiz);
router.put("/edit", editQuiz);

export default router;