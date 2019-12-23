import mongoose, { Schema } from "mongoose";
import authors from "./authors";
import categories from "./categories";

let { ObjectId } = Schema.Types

let books = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: categories
    },
    author: {
        type: ObjectId,
        ref: authors
    },
    publishedYear: Number
})

export default mongoose.model('Book', books)