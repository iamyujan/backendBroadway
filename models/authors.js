import mongoose, { Schema } from "mongoose";

let authors = new Schema({
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model('Author', authors)