import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import aiRoutes from "./routes/aiRoutes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/ai", aiRoutes);

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
