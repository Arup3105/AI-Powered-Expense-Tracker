import {Router} from 'express';
import {addExpense, getExpenses, deleteExpenses} from '../controllers/expenseController';

const router = Router();

router.post('/', addExpense);
router.get('/getExpenses', getExpenses);
router.delete('/:id', deleteExpenses);

export default router;