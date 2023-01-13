import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const randomId = (): string => Math.random().toString(36).slice(2, 7);

interface Book {
  id: string;
  title: string;
  author: string;
  published: number;
}

let books: Book[] = [
  {
    id: randomId(),
    title: 'Lód',
    author: 'Dukaj',
    published: 2007,
  },
];

// GET all books
app.get('/api/books', (req: Request, res: Response) => {
  res.json({
    data: books,
  });
});

// POST book
app.post('/api/books/', (req: Request, res: Response) => {
  const { title, author, published } = req.body;
  const newBook = {
    id: randomId(),
    title,
    author,
    published,
  };
  books.push(newBook);
  res.status(201).json({
    data: newBook,
  });
});

// GET one book by id
app.get('/api/books/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const book = books.find(item => item.id === id);
  res.json({
    data: book,
  });
});

// DELETE book by id
app.delete('/api/books/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  books = books.filter(user => user.id !== id);
  res.status(204);
});

// PUT (update) book by id
app.put('/api/books/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, published } = req.body;
  const existingBook = books.find(item => item.id === id);

  if (existingBook === undefined) {
    const newBook = {
      id: randomId(),
      title,
      author,
      published,
    };
    books.push(newBook);
    res.status(201).json({
      data: newBook,
    });
  }

  const updatedBook: Book = {
    id,
    title: title === undefined ? existingBook?.title : title,
    author: author === undefined ? existingBook?.author : author,
    published: published === undefined ? existingBook?.published : published,
  };

  books = books.map(book => {
    if (book.id === id) {
      return updatedBook;
    } else {
      return book;
    }
  });

  res.json({
    data: updatedBook,
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000!');
});
