"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenseController_1 = require("../controllers/expenseController");
const router = (0, express_1.Router)();
router.post('/', expenseController_1.addExpense);
router.get('/', expenseController_1.getExpenses);
router.delete('/:id', expenseController_1.deleteExpenses);
exports.default = router;
//# sourceMappingURL=expenseRoutes.js.map