import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../errors/application.error";
import bookService from "./books.service";
import {
  createBookValidator,
  updateBookValidator,
} from "./utils/validation.utils";

const getAllBooksHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({
      data: await bookService.getAllBooks(),
    });
  } catch (error) {
    next(error);
  }
};

const getBookByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const response = await bookService.getBookById(id);

    if (!response) {
      next(new ApplicationError(404, "Book not found"));
    }

    res.json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const createBookHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, author, published, cover } = req.body;

  const { error } = createBookValidator({ title, author, published, cover });
  if (error) {
    next(
      new ApplicationError(
        400,
        error.details.map((err) => err.message).join(",")
      )
    );
  }

  try {
    const response = await bookService.createBook({
      title,
      author,
      published,
      cover,
    });

    res.status(201).json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const updateBookByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { title, author, published, cover } = req.body;

  const { error } = updateBookValidator({ title, author, published, cover });
  if (error) {
    next(
      new ApplicationError(
        400,
        error.details.map((err) => err.message).join(",")
      )
    );
  }

  try {
    const response = await bookService.updateBookById(id, {
      title,
      author,
      published,
      cover,
    });

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBookByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    await bookService.deleteBookById(id);

    res.status(204);
  } catch (error) {
    next(error);
  }
};

export default {
  getAllBooksHandler,
  getBookByIdHandler,
  createBookHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
};
