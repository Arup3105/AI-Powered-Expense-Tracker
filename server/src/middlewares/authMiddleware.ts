import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  userId?: string;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
    try {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const secretKey = process.env.JWT_SECRET as string;

    if(!secretKey){
        return res.status(500).json({ message: 'Server configuration error' });
    }

    if (!token) {
        return res.status(401).json({ message: 'Token missing or malformed' });
    }

        const decoded = jwt.verify(token, secretKey);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}