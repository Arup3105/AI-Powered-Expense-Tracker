import { Router } from "express";
import { addExpense, getExpenses, deleteExpenses } from "../controllers/expenseController";
import { addExpenseSchema, deleteExpenseSchema } from "../validations/expenseValidation";
import validateRequest from "../middlewares/validateRequest";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authMiddleware, validateRequest(addExpenseSchema), addExpense);
router.get("/", authMiddleware, getExpenses);
router.delete("/:id", authMiddleware, validateRequest(deleteExpenseSchema), deleteExpenses);

export default router;
