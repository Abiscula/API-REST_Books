import express from "express";

const app = express()

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

export default app