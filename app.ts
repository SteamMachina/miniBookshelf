import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes";
import cors from "cors";
import { connectDB } from "./config/db";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// swagger
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.3",
    info: { title: "MiniBookshelf API", version: "1.0.0" },
    servers: [{ url: "http://localhost:3000" }],
  },
  // Adjusted to match your repo structure (no src/ folder)
  apis: ["./**/*.ts"],
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
export default app;
startServer();
