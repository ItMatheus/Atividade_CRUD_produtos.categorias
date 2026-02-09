import express from 'express';
import produtosController from '../controller/produtosController.js'

const router = express.Router()

router.get("/", produtosController.index)
router.post("/", produtosController.store)
router.put("/:id", produtosController.edit)
router.delete("/:id", produtosController.exclud)
router.get("/:id", produtosController.indexOneCategoria)

export default router