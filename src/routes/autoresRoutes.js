import express from "express";
import AutorController from "../config/controllers/autoresController.js";

const router = express.Router()

router
    .get('/autores', AutorController.listAuthors)
    .get('/autores/:id', AutorController.listAuthorById)
    .post('/autores', AutorController.registerAuthor)
    .put('/autores/:id', AutorController.updateAuthor)
    .delete('/autores/:id', AutorController.deleteAuthor)

export default router