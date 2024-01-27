import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (
      (!username,
      !email,
      !password || username === "",
      email === "",
      password === "")
    ) {
      return res.status(400).json({ message: "All frilds are required" });
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    await User.create({
      username,
      email,
      password: hashPassword,
    });
    res.status(200).json("successfully!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
