import { Router } from 'express';
import booksController from './books.controller';

const booksRouter = Router();

// GET all books
booksRouter.get('/', booksController.getAllBooksHandler);

// POST book
booksRouter.post('/', booksController.createBookHandler);

// GET one book by id
booksRouter.get('/:id', booksController.getBookByIdHandler);

// DELETE book by id
booksRouter.delete('/:id', booksController.deleteBookByIdHandler);

// PUT (update) book by id
booksRouter.put('/:id', booksController.updateBookByIdHandler);

export default booksRouter;
