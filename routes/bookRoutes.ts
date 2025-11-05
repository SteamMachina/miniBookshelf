import { BookController } from "../controllers/BookController";
import express from "express";

const router = express.Router();
const bookController = new BookController();

// routes
router.post("/", (req, res) => bookController.createBook(req, res));
router.get("/", (req, res) => bookController.getAllBooks(req, res));
router.get("/search", (req, res) => bookController.advancedSearch(req, res));
/**
 * @openapi
 * /books/hello:
 *   get:
 *     summary: Dire bonjour
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Nom à saluer
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Bonjour, Alice !"
 */
router.get("/hello", (req, res) => {
  const name = req.query.name;
  if (name) {
    res.json({ message: `Bonjour, ${name} !` });
  } else {
    res.json({ message: `Bonjour, monde !` });
  }
});

/**
 * @openapi
 * /books/users/{id}:
 *   get:
 *     summary: Donner un id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id a renvoyer
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 1
 */
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});
router.get("/:id", (req, res) => bookController.getByid(req, res));

export default router;
