import mongoose, { Schema } from "mongoose";

let Categories = new Schema({
    title: {
        type: String,
        required: true
    }
})

export default mongoose.model('category', Categories)