import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import aiRoutes from "./routes/aiRoutes";
dotenv.config();
import { supabase } from "./config/supabaseClient";



const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/ai", aiRoutes);

const testDBConnection = async () => {
  const { data, error } = await supabase.from("users").select("id").limit(1);

  if (error) {
    console.error("❌ Database connection failed:", error.message);
  } else {
    console.log("✅ Connected to Supabase. Users table check:", data);
  }
};

app.listen(PORT, async() => {
  console.log(`Server running on http://localhost:${PORT}`);
  await testDBConnection()
});
