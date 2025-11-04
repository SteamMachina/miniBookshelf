import app from "../app";
import request from "supertest";

describe("Server Integration Tests", () => {
  // create new book
  it("POST /books returns void", async () => {
    const res = await request(app).post("/books").send({
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1954,
    });

    expect(res.status).toBe(201);
  });

  // get all books
  it("GET /books returns void", async () => {
    const res = await request(app).get("/books");
    expect(res.status).toBe(200);
  });

  // get book by id
  it("GET /books:id returns void", async () => {
    const book = await request(app).post("/books").send({
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1954,
    });
    const bookId = book.body.data._id;

    const res = await request(app).get(`/books/${bookId}`);
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  // advanced search
  it("GET /books/search returns void", async () => {
    const book = await request(app).post("/books").send({
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1954,
    });

    const res = await request(app)
      .get("/books/search")
      .query({ keyword: "fantasy" });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
