const randomId = () => Math.random().toString(36).slice(2, 7);

type Book = {
  id: string;
  title: string;
  author: string;
  published: number;
};

type BookInput = Omit<Book, "id">;

let books: Book[] = [
  {
    id: randomId(),
    title: "Lód",
    author: "Dukaj",
    published: 2007,
  },
];

const getAllBooks = (): Book[] => books;

const getBookById = (id: string): Book | undefined =>
  books.find((book) => book.id === id);

const createBook = (input: BookInput): Book => {
  const { title, author, published } = input;
  const newBook = {
    id: randomId(),
    title,
    author,
    published,
  };
  books.push(newBook);
  return newBook;
};

const deleteBookById = (id: string): void => {
  books = books.filter((user) => user.id !== id);
};

const updateBookById = (id: string, input: BookInput): Book => {
  const { title, author, published } = input;
  const existingBook = books.find((book) => book.id === id);

  if (!existingBook) {
    const newBook = {
      id: randomId(),
      title,
      author,
      published,
    };
    books.push(newBook);
    return newBook;
  }

  const updatedBook: Book = {
    id,
    title: title ? title : existingBook?.title,
    author: author ? author : existingBook?.author,
    published: published ? published : existingBook?.published,
  };

  books = books.map((book) => {
    if (book.id === id) {
      return updatedBook;
    } else {
      return book;
    }
  });
  return existingBook;
};

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
