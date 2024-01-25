import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// db connect
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("db error", err);
  });
app.listen(8000, () => {
  console.log("server is start");
});
