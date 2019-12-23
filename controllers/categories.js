import { errMessageGet, errMessageSave, messageSave, errMessageDelete, messageDel, errMessageUpdate, messageUpdate } from "../config/constants"
import Categories from "../models/categories"

export const getAllCategories = (req, res) => {
    Categories.find({}, (err, categories) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ categories })
    })
}

export const getCategoryById = (req, res) => {
    Categories.findById(req.params.id, (err, categories) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ categories })
    })
}

export const postNewCategory = (req, res) => {
    new Categories(req.body).save((err, data) => {
        console.log(err)
        if (err) res.status(500).json(errMessageSave)
        res.status(201).json(messageSave)
    })
}

export const deleteCategoryById = (req, res) => {
    Categories.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) res.status(500).json(errMessageDelete)
        res.status(200).json(messageDel)
    })
}

export const updateCategoryById = (req, res) => {
    Categories.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) res.status(500).json(errMessageUpdate)
        res.status(200).json(messageUpdate)
    })
}