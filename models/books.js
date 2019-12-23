import mongoose, { Schema } from "mongoose";
import authors from "./authors";

let { ObjectId } = Schema.Types

let books = new Schema({
    title: {
        type: String,
        required: true
    },
    category: ObjectId,
    author: {
        type: ObjectId,
        ref: authors
    },
    publishedYear: Number
})

export default mongoose.model('Book', books)