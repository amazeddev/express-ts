import { Request, Response } from "express";
import bookService from "./books.service";

const getAllBooksHandler = (req: Request, res: Response) => {
  const response = bookService.getAllBooks();
  res.json({
    data: response,
  });
};

const getBookByIdHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  const response = bookService.getBookById(id);

  if (!response) {
    res.status(404).json({ msg: "Book not found" });
  }

  res.json({
    data: response,
  });
};

const createBookHandler = (req: Request, res: Response) => {
  const { title, author, published } = req.body;

  const response = bookService.createBook({ title, author, published });

  res.status(201).json({
    data: response,
  });
};

const updateBookByIdHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, published } = req.body;

  const response = bookService.updateBookById(id, { title, author, published });

  res.status(200).json({
    data: response,
  });
};
const deleteBookByIdHandler = (req: Request, res: Response) => {
  const { id } = req.params;

  bookService.deleteBookById(id);

  res.status(204);
};

export default {
  getAllBooksHandler,
  getBookByIdHandler,
  createBookHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
};
