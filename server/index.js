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

// midelware
app.use((err, req, res) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internl Server Error!";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(8000, () => {
  console.log("server is start");
});
