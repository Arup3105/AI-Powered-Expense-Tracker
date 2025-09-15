import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.format(),
      });
    }

    req.body = result.data;
    next();
  };
};

export default validateRequest;
