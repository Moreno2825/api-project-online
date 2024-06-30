import { Router } from "express";
import * as controller from "../controllers/quiz.controller.js";

const router = Router();

router.post("/quiz/crear", controller.postQuiz);
router.get("/quiz/consultar", controller.getAllQuizzes);


export default router;