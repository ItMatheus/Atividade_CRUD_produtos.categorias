
import Produto from "../models/produtos.js";

async function index(req, res) {

    try {
        const produtos = await Produto.getAllProducts()
        return res.json(produtos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro ao buscar produtos"})
    }
}

// async function store(req, res) {
//     try {
//         const produto = req.body

        

//         await Produto.createProduct(produto);
//         res.status(201).json({
//             message: "Produto foi cadastrado com sucesso!"
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: `Erro ${error} ao criar produto!`
//         })
//     }
// }

async function store(req, res) {
    try {
        const{  
            nome,
            descricao,
            preco,
            quantidade_estoque,
            status,
            destaque,
            marca,
            modelo,
            garantia_meses,
            id_categoria
        } = req.body

        if(!nome || !descricao || !preco || preco === undefined || !quantidade_estoque || !status || !destaque || !marca || !modelo || !garantia_meses || id_categoria === undefined){
            
            res.status(400).json({
                message : "Preencha os campos corretamente!"
            })
        }
        
        const produto = {  
            nome,
            descricao,
            preco,
            quantidade_estoque,
            status,
            destaque,
            marca,
            modelo,
            garantia_meses,
            id_categoria
        } 

        await Produto.createProduct(produto);
        res.status(201).json({
            message: "Produto foi cadastrado com sucesso!"
        })
    } catch (error) {
        res.status(500).json({
            message: `Erro ${error} ao criar produto!`
        })
    }
}


async function edit(req, res)   {
    try {
    const { id } = req.params;
    const produto = req.body;

    
    await Produto.updateProduct(id, produto)
    res.status(201).json({
        message : 'Usuário atualizado com sucesso!'
    })

    } catch (error) {
        res.status(500).json({
            message : 'Erro ao atualizar produto!'
        })
    }
     
}

async function exclud(req, res) {

    try {
        const {id} =  req.params;

        await Produto.deleteProduct(id)
        res.status(201).json({
            message : "Produto deletado com sucesso!"
        })


    } catch (error) {
        res.status(404).json({
            message : "Erro ao deletar usuário!"
        })
    }
}

async function indexOneCategoria(req, res) {
    try {
        const {id} = req.params;
        
        const produtos_categoria = await Produto.getOneCategoria(id)
        return res.json(produtos_categoria)
    } catch (error) {
        res.status(500).json({
            error: "Erro ao listar produtos por categoria"
        })
    }
   
}

export default { index, store, edit, exclud, indexOneCategoria}