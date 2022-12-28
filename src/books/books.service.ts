import { Book, BookInput } from "./books.model";

const getAllBooks = async () => await Book.find({});

const getBookById = async (id: string) => await Book.findById(id);

const createBook = async (input: BookInput) => {
  const { title, author, published } = input;
  return await Book.create({ title, author, published });
};

const deleteBookById = async (id: string) => {
  await Book.findOneAndDelete({ id });
};

const updateBookById = async (id: string, input: BookInput) => {
  const { title, author, published } = input;
  return await Book.findOneAndUpdate(
    { id },
    {
      $set: { title, author, published },
    }
  );
};

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
