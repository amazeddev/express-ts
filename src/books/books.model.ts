import { Schema, model } from "mongoose";

interface IBook {
  title: string;
  author: string;
  published: number;
}

export type BookInput = IBook;

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  published: Number,
});

export const Book = model<IBook>("Book", bookSchema);
