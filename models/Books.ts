import mongoose, { Schema, Document } from "mongoose";

// typescript interface
export interface BookInterface extends Document {
  title: string;
  author: string;
  genre:
    | "Romance"
    | "Science-Fiction"
    | "Fantasy"
    | "Mystery"
    | "Thriller"
    | "Biography"
    | "History"
    | "Travel"
    | "Cooking"
    | "Art"
    | "Poetry"
    | "Drama"
    | "Other";
  description?: string;
  year: number;
}

// Mongoose schema
const BookSchema = new Schema<BookInterface>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      enum: [
        "Romance",
        "Science-Fiction",
        "Fantasy",
        "Mystery",
        "Thriller",
        "Biography",
        "History",
        "Travel",
        "Cooking",
        "Art",
        "Poetry",
        "Drama",
        "Other",
      ],
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    year: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model<BookInterface>("Book", BookSchema);
