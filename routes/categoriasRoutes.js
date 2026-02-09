import express from 'express';
import categoriasController from '../controller/categoriasController.js'

const router = express. Router();

router.get("/", categoriasController.indexCategoria)
router.get("/:id", categoriasController.indexEspecificCategoria)
router.post("/:senha", categoriasController.createCategoria)
router.delete("/:id", categoriasController.excludCategoria)

export default router;