import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import booksRouter from "./books/books.routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { logger } from "./middlewares/logger.middleware";

const app = express();
app.use(express.json());
// app.use(logger);
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/api/books", booksRouter);

app.use(errorHandler);

export default app;
