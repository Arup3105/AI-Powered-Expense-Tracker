import { z } from "zod";

export const addExpenseSchema = z.object({
  type: z.string().min(2, "Type must be at least 2 characters"),
  amount: z.number().positive("Amount must be positive"),
  description: z.string().optional(),
});

export const deleteExpenseSchema = z.object({
  id: z.string().uuid("Invalid expense ID"),
});
