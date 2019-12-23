import { getAllCategories, getCategoryById, postNewCategory, deleteCategoryById, updateCategoryById  } from "../controllers/categories"

export default (app) => {
    app.get('/categories', getAllCategories)
    app.get('/categories/:id', getCategoryById)
    app.post('/categories', postNewCategory)
    app.delete('/categories/:id', deleteCategoryById)
    app.put('/categories/:id', updateCategoryById)
}