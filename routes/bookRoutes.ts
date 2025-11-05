import { BookController } from "../controllers/BookController";
import express from "express";

const router = express.Router();
const bookController = new BookController();

router.use(express.json());

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "123"
 *         name:
 *           type: string
 *           example: "Alice"
 *         email:
 *           type: string
 *           format: email
 *           example: "alice@example.com"
 *     Error:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: "Error"
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

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
 *     security:
 *       - bearerAuth: []
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
 *               $ref: "#/components/schemas/User"
 *       404:
 *         description: Utilisateur non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       400:
 *         description: Requête invalide
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "Lily", email: "lily.kami@efrei.net" });
});

/**
 * @openapi
 * /books/users:
 *   post:
 *     summary: renseigner un nom et email
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *         description: name et email a renvoyer
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 */
router.post("/users", (req, res) => {
  const user = req.body;
  console.log(user);
  res.json({ user });
});
router.get("/:id", (req, res) => bookController.getByid(req, res));

export default router;
