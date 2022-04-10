import livros from '../../models/Livro.js';

class LivroController {

    static listBooks = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livro) => {
                res.status(200).json(livro)
            })
    }

    static listBookById = (req, res) => {
        const id = req.params.id

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - livro não localizado`})
                } else {
                    res.status(200).send(livros)
                }
            })
    }

    static registerBook = (req, res) => {
        let livro = new livros(req.body)
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        }) //salva o livro no banco
    }

    static updateBook = (req, res) => {
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default LivroController