import express from 'express';
import produtosController from '../controller/produtosController.js'

const router = express.Router()

router.get("/", produtosController.index)
router.post("/", produtosController.store)
router.put("/:id", produtosController.update)
router.delete("/:id", produtosController.delete)
router.get("/:id", produtosController.indexCategoria)

export default router