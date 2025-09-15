import { Router } from "express";
import { getExpenseInsights } from "../controllers/aiController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/insights",authMiddleware, getExpenseInsights);

export default router;