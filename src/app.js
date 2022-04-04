import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js"
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express()
app.use(express.json())

routes(app)


app.get('/livros/:id', (req, res) => {
    let index = getBook(req.params.id)
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    let index = getBook(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params
    let index = getBook(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})

function getBook(id) {
    return livros.findIndex(book => book.id == id)
}

export default app