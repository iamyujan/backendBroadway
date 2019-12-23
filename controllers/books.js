import { errMessageGet, errMessageSave, messageSave, errMessageDelete, messageDel, errMessageUpdate, messageUpdate } from "../config/constants"
import Books from "../models/books"
import authors from "../models/authors"

export const getAllBooks = (req, res) => {
    Books.find({}, (err, books) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ books })
    }).populate('author')
}

export const getBookById = (req, res) => {
    Books.findById(req.params.id, (err, books) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ books })
    })
}

export const postNewBook = (req, res) => {
    new Books(req.body).save((err, data) => {
        console.log(err)
        if (err) res.status(500).json(errMessageSave)
        res.status(201).json(messageSave)
    })
}

export const deleteBookById = (req, res) => {
    Books.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) res.status(500).json(errMessageDelete)
        res.status(200).json(messageDel)
    })
}

export const updateBookById = (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) res.status(500).json(errMessageUpdate)
        res.status(200).json(messageUpdate)
    })
}