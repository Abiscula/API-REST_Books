import livros from '../../models/Livro.js';

class LivroController {

    static listBooks = (req, res) => {
        livros.find((err, livro) => {
            res.status(200).json(livro)
        })
    }


}

export default LivroController