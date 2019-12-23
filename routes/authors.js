import { getAllAuthors, getAuthorById, postNewAuthor, deleteAuthorById, updateAuthorById } from "../controllers/authors"

export default (app) => {
    app.get('/authors', getAllAuthors)
    app.get('/authors/:id', getAuthorById)
    app.post('/authors', postNewAuthor)
    app.delete('/authors/:id', deleteAuthorById)
    app.put('/authors/:id', updateAuthorById)
}