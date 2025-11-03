import { Request, Response } from "express";
import { BookService } from "../services/BookService";
import { BookInterface } from "../models/Books";

export class BookController {
  private bookService: BookService;
  constructor() {
    this.bookService = new BookService();
  }

  // create a book
  async createBook(req: Request, res: Response): Promise<void> {
    try {
      const bookData: Partial<BookInterface> = req.body;
      const newBook = await this.bookService.createBook(bookData);
      res.status(201).json({
        success: true,
        data: newBook,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message || "Error creating book",
      });
    }
  }

  // get all books
  async getAllBooks(req: Request, res: Response): Promise<void> {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json({
        success: true,
        count: books.length,
        data: books,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || "Error fetching books",
      });
    }
  }

  // get book by id
  async getByid(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const book = await this.bookService.getBookById(id);

      if (!book) {
        res.status(404).json({
          success: false,
          message: "Book not found",
        });
      }
      res.status(200).json({
        success: true,
        data: book,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message || "Error fetching book",
      });
    }
  }

  // advanced search
  async advancedSearch(req: Request, res: Response): Promise<void> {
    try {
      const { keyword, genre, year } = req.query;
      const searchParams: { keyword?: string; genre?: string; year?: number } =
        {};
      if (keyword) searchParams.keyword = keyword as string;
      if (genre) searchParams.genre = genre as string;
      if (year) searchParams.year = parseInt(year as string);

      const books = await this.bookService.advancedSearch(searchParams);
      res.status(200).json({
        success: true,
        count: books.length,
        data: books,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message || "Error fetching books",
      });
    }
  }
}
