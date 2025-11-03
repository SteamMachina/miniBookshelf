import BookSchema, { BookInterface } from "../models/Books";

export class BookService {
  //create Book
  async createBook(bookData: Partial<BookInterface>): Promise<BookInterface> {
    const book = new BookSchema(bookData);
    return book.save();
  }

  //get all Books
  async getAllBooks(): Promise<BookInterface[]> {
    return BookSchema.find();
  }

  //find Book by id
  async getBookById(id: string): Promise<BookInterface | null> {
    return BookSchema.findById(id);
  }

  // advanced search
  async advancedSearch(params: {
    keyword?: string;
    genre?: string;
    year?: number;
  }): Promise<BookInterface[]> {
    const { keyword, genre, year } = params;
    const query: any = {};

    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ];
    }

    if (genre) {
      query.genre = genre;
    }

    if (year) {
      query.year = year;
    }
    return BookSchema.find(query);
  }
}
