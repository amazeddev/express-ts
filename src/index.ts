import { connect } from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5000;

connect("mongodb://user:password@localhost:27017/library", () =>
  console.log("Connected to MongoDB")
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
