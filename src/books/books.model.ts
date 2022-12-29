import { Schema, model } from "mongoose";

export enum bookCover {
  paperback = "paperback",
  hardcover = "hardcover",
}

interface IBook {
  title: string;
  author: string;
  published: number;
  cover: bookCover;
}

export type CreateBookInput = IBook;
export type UpdateBookInput = Partial<IBook>;

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  published: Number,
  cover: { type: String, enum: bookCover, required: true },
});

export const Book = model<IBook>("Book", bookSchema);
