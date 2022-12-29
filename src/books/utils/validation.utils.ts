import Joi from "joi";
import { BookCover, CreateBookInput, UpdateBookInput } from "../books.model";

export const createBookValidator = (data: CreateBookInput) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(100).required(),
    author: Joi.string().min(2).max(50).required(),
    published: Joi.number().min(1000).max(2022).required(),
    cover: Joi.string().valid(BookCover).required(),
  });

  return schema.validate(data, { abortEarly: false });
};

export const updateBookValidator = (data: UpdateBookInput) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(100),
    author: Joi.string().min(2).max(50),
    published: Joi.number().min(1000).max(2022),
    cover: Joi.string().valid(BookCover),
  });

  return schema.validate(data, { abortEarly: false });
};
