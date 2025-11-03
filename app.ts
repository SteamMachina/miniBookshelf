import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes";
import cors from "cors";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/books", bookRoutes);

// check
app.get("/", (req, res) => {
  res.json({ message: "MiniBookshelf API is running!" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
