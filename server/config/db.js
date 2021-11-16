import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "variables.env" });

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO);
    console.log("db connect");
  } catch (error) {
    console.log(error);
    process.exit(1); // stop app
  }
};
