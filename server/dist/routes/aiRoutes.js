"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aiController_1 = require("../controllers/aiController");
const router = (0, express_1.Router)();
router.get("/insights", aiController_1.getExpenseInsights);
exports.default = router;
//# sourceMappingURL=aiRoutes.js.map