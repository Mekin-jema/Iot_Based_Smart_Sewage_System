import mongoose from "mongoose";

export const connectDB = async (next) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    next();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
