import express from "express";
import LivroController from "../config/controllers/livrosController.js";

const router = express.Router()

router
    .get('/livros', LivroController.listBooks)
    .get('/livros/:id', LivroController.listBookById)
    .post('/livros', LivroController.registerBook)
    .put('/livros/:id', LivroController.updateBook)
    .delete('/livros/:id', LivroController.deleteBook)

export default router