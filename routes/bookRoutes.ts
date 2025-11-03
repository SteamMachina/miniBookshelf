import { BookController } from "../controllers/BookController";
import express from "express";

const router = express.Router();
const bookController = new BookController();

// routes
router.post("/", (req, res) => bookController.createBook(req, res));
router.get("/", (req, res) => bookController.getAllBooks(req, res));
router.get("/:id", (req, res) => bookController.getByid(req, res));
router.get("/search", (req, res) => bookController.advancedSearch(req, res));

export default router;
