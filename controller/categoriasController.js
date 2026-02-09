import Categoria from '../models/categorias.js'

async function indexCategoria(req, res){

    try {
        const categorias = await Categoria.getAllCategorias()
        return res.json(categorias)
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao mostrar categorias'
        })
    }
}
async function indexEspecificCategoria(req, res){
    try {

        const {id} = req.params;

        const categorias = await Categoria.getCategoriasEspecific(id)
        return res.json(categorias)

    } catch (error) {

        res.status(500).json({
            error : 'Erro ao mostrar essa categoria'
        })
    }
}
async function createCategoria(req, res) {
    try {

        const{nome, descricao} = req.body;

        if(!nome || !descricao){
           res.status(400).json({
            error: "Erro! Preencha os campos corretamente!"
           }) 
        }
        
        const categoria = {nome, descricao};

        
        await Categoria.createCategorias(categoria)
        res.status(201).json({
            message: "Categoria criada com sucesso"
        })
        res.status(500).json({
            message: "Error. Você precisa da senha para criar uma categoria."
        })

    } catch (error) {
        res.status(500).json({
            error: 'Erro ao criar categorias.'
        })
    }
    
    
}

async function excludCategoria(req, res) {
     try {
            const {id} =  req.params;
    
            await Categoria.deleteCategoria(id)
            res.status(201).json({
                message : "Categoria deletada com sucesso!"
            })
    
    
        } catch (error) {
            res.status(404).json({
                message : "Erro ao deletar categoria!"
            })
        }
}
export default {indexCategoria, indexEspecificCategoria, createCategoria, excludCategoria}