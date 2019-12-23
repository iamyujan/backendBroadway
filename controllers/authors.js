import { errMessageGet, errMessageSave, messageSave, errMessageDelete, messageDel, errMessageUpdate, messageUpdate } from "../config/constants"
import Authors from "../models/authors"

export const getAllAuthors = (req, res) => {
    Authors.find({}, (err, authors) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ authors })
    })
}

export const getAuthorById = (req, res) => {
    Authors.findById(req.params.id, (err, authors) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ authors })
    })
}

export const postNewAuthor = (req, res) => {
    new Authors(req.body).save((err, data) => {
        console.log(err)
        if (err) res.status(500).json(errMessageSave)
        res.status(201).json(messageSave)
    })
}

export const deleteAuthorById = (req, res) => {
    Authors.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) res.status(500).json(errMessageDelete)
        res.status(200).json(messageDel)
    })
}

export const updateAuthorById = (req, res) => {
    Authors.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) res.status(500).json(errMessageUpdate)
        res.status(200).json(messageUpdate)
    })
}