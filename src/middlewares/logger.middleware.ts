import { NextFunction, Request, Response } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const { url, method } = req;
  const time = new Date().toISOString();
  console.log(`${time} - [${method}] ${url}`);
  next();
};
