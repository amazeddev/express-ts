import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../errors/application.error";

export const errorHandler = (
  err: ApplicationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMessage = err.message || "Something went wrong";
  res.status(errStatus).json({
    error: errMessage,
  });
};
