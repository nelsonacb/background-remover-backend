import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("❌ ERROR:", err.message);
  res.status(500).json({ success: false, message: err.message });
};
