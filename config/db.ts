import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in environment variables");
  process.exit(1);
}

const MONGODB_URI: string = process.env.MONGODB_URI;

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connecté :", mongoose.connection.name);
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB");
    process.exit(1);
  }
};
