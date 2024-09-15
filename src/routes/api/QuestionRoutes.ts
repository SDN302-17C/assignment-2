import express from "express";
import {
  getAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../../controllers/api/QuestionController";

const router = express.Router();

router.get("/", getAllQuestions);
router.post("/", createQuestion);
router.put("/:questionId", updateQuestion);
router.delete("/:questionId", deleteQuestion);

export default router;
