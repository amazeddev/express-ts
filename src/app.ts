import express from "express";
import booksRouter from "./books/books.routes";

const app = express();
app.use(express.json());

app.use("/api/books", booksRouter);

export default app;
