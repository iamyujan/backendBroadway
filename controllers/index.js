import books from "../models/books"

export const getHomePage = (req, res) => {
    books.find({}, (err, books) => {
        if (err) res.send('Error in server')
        let bookHtml = books.map(book => {
            return `<li>${book.title}</li>`
        }).join('')
        res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <ul>
            ${bookHtml}
        </ul>
    </body>
    </html>
    `)
    })

}


export const route404 = (req, res) => {
    res.send('nothing found')
}