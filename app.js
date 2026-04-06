import express from 'express';
import cors from 'cors';
import produtosRoutes from "./routes/produtosRoutes.js";
import categoriasRoutes from "./routes/categoriasRoutes.js";
import erroHandler from './middleware/errorHandler.js';

const app = express()
app.use(cors())
app.use(express.json())

app.use("/produtos", produtosRoutes)
app.use("/categorias", categoriasRoutes)

app.use(erroHandler)

export default app

