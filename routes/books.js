import { getAllBooks, postNewBook, getBookById, deleteBookById, updateBookById } from "../controllers/books"

export default (app) => {
    app.get('/books', getAllBooks)
    app.get('/books/:id', getBookById)
    app.post('/books', postNewBook)
    app.delete('/books/:id', deleteBookById)
    app.put('/books/:id', updateBookById)
}