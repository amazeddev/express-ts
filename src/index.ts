import app from "./app";
import { conncetDB } from "./config/dbConnection";

const PORT = process.env.PORT || 5000;

conncetDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
