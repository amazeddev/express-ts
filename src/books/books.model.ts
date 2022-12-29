import { Schema, model } from "mongoose";

export enum BookCover {
  paperback = "paperback",
  hardcover = "hardcover",
}

interface IBook {
  title: string;
  author: string;
  published: number;
  cover: BookCover;
}

export type CreateBookInput = IBook;
export type UpdateBookInput = Partial<IBook>;

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  published: Number,
  cover: { type: String, enum: BookCover, required: true },
});

export const Book = model<IBook>("Book", bookSchema);
