import express from "express";

const app = express()
app.use(express.json())

const books = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('Livraria NodeJS')
})

app.get('/livros', (req, res) => {
    res.status(200).json(books)
})

app.get('/livros/:id', (req, res) => {
    let index = getBook(req.params.id)
    res.json(books[index])
})

app.post('/livros', (req, res) => {
    books.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    let index = getBook(req.params.id)
    books[index].titulo = req.body.titulo
    res.json(books)
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params
    let index = getBook(id)
    books.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})

function getBook(id) {
    return books.findIndex(book => book.id == id)
}

export default app