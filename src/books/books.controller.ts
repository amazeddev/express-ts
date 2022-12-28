import { Request, Response } from "express";
import bookService from "./books.service";
import {
  createBookValidator,
  updateBookValidator,
} from "./utils/validation.utils";

const getAllBooksHandler = async (req: Request, res: Response) => {
  try {
    res.json({
      data: await bookService.getAllBooks(),
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getBookByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await bookService.getBookById(id);

    if (!response) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createBookHandler = async (req: Request, res: Response) => {
  const { title, author, published, cover } = req.body;

  // Validate request
  const { error } = createBookValidator({ title, author, published, cover });
  if (error) {
    return res.status(400).json({
      error: error.details.map((err) => err.message).join(","),
    });
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
    res.status(500).json({
      error,
    });
  }
};

const updateBookByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, published, cover } = req.body;

  // Validate request
  const { error } = updateBookValidator({ title, author, published, cover });
  if (error) {
    return res.status(400).json({
      error: error.details.map((err) => err.message).join(","),
    });
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
    res.status(500).json({
      error,
    });
  }
};

const deleteBookByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await bookService.deleteBookById(id);

    res.status(204);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export default {
  getAllBooksHandler,
  getBookByIdHandler,
  createBookHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
};
