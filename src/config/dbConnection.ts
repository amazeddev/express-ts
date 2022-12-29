import { connect, connection, set } from "mongoose";

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

set("strictQuery", true);

export const conncetDB = () => {
  connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}`);
};

connection.on("connecting", () => console.log("connecting to mongoDB..."));
connection.on("connected", () =>
  console.log("succesfully connected to mongoDB!")
);
connection.on("disconnected", () => {
  console.log("disconnected from mongoDB!");
  setTimeout(conncetDB, 1000);
});
connection.on("error", () => console.log("could not connect to mongoDB!"));
