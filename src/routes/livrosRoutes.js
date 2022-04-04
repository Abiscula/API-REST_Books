import express from "express";
import LivroController from "../config/controllers/livrosController.js";

const router = express.Router()

router
    .get('/livros', LivroController.listBooks)


export default router