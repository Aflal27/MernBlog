import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
dotenv.config();

const app = express();
app.use(express.json());

// db connect
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("db error", err);
  });

//   routers
app.use("/api/auth", authRouter);

app.listen(8000, () => {
  console.log("server is start");
});
