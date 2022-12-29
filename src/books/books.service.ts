import { Book, CreateBookInput, UpdateBookInput } from "./books.model";

const getAllBooks = async () => await Book.find({});

const getBookById = async (id: string) => await Book.findById(id);

const createBook = async (input: CreateBookInput) => {
  const { title, author, published, cover } = input;
  return await Book.create({ title, author, published, cover });
};

const deleteBookById = async (id: string) => {
  await Book.findByIdAndDelete(id);
};

const updateBookById = async (id: string, input: UpdateBookInput) => {
  const { title, author, published, cover } = input;
  return await Book.findByIdAndUpdate(
    id,
    { title, author, published, cover },
    { new: true }
  );
};

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
