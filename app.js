import express from 'express';
import produtosRoutes from "./routes/produtosRoutes.js";
import categoriasRoutes from "./routes/categoriasRoutes.js";

const app = express()
app.use(express.json())

app.use("/produtos", produtosRoutes)
app.use("/categorias", categoriasRoutes)

export default app

