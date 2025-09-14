import { Router } from "express";
import { getExpenseInsights } from "../controllers/aiController";

const router = Router();

router.get("/insights", getExpenseInsights);

export default router;