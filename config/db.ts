import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/miniBookshelf";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connecté :", mongoose.connection.name);
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB:", error);
    process.exit(1);
  }
};
