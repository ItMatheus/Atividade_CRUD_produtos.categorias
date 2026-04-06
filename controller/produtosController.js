
import ProdutosService from "../services/ProdutosService.js"


class ProdutoController{
    async index(req, res, next){
        try {
           const produtos = await Produto.getAllProducts()
           res.json(produtos) 
        } catch (error) {
            next(error)
        }
    }

    async store(req, res, next){
        try {
            await ProdutosService.criarProduto(req.body)
            res.status(201).json({
                message: "Produto cadastrado com sucesso!"
            })
        } catch (error) {
            next(error)
        }
    }

    async update(req, res){
        try {
            const {id} = req.params

            await ProdutosService.atualizar(id, req.body)
            res.status(200).json({
                message: "Produto Atualizado com sucesso!"
            })

        } catch (error) {
            next(error)
        }
    }

    async delete(req, res){
        try {
            const {id} = req.params

            await ProdutosService.delete(id)
            res.status(200).json({
                message: "Produto removido com sucesso!"
            })

        } catch (error) {
            next(error)
        }
    }

    async indexCategoria(req, res){
        try {
            const {id} = req.params;

            if(!id){
                throw new Error("ID do produto é obrigatório!")
            }

            const produtos_categoria = await Produto.getOneCategoria(id)
            res.json(produtos_categoria)
        } catch (error) {
            next(error)
        }
    }
}


// async function index(req, res) {

//     try {
//         const produtos = await Produto.getAllProducts()
//         return res.json(produtos);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: "Erro ao buscar produtos"})
//     }
// }

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

// async function store(req, res) {
//     try {
//         const{  
//             nome,
//             descricao,
//             preco,
//             quantidade_estoque,
//             status,
//             destaque,
//             marca,
//             modelo,
//             garantia_meses,
//             id_categoria
//         } = req.body

//         if(!nome || !descricao || !preco || preco === undefined || !quantidade_estoque || !status || !destaque || !marca || !modelo || !garantia_meses || id_categoria === undefined){
            
//             res.status(400).json({
//                 message : "Preencha os campos corretamente!"
//             })
//         }
        
//         const produto = {  
//             nome,
//             descricao,
//             preco,
//             quantidade_estoque,
//             status,
//             destaque,
//             marca,
//             modelo,
//             garantia_meses,
//             id_categoria
//         } 

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


// async function edit(req, res)   {
//     try {
//     const { id } = req.params;
//     const produto = req.body;

    
//     await Produto.updateProduct(id, produto)
//     res.status(201).json({
//         message : 'Usuário atualizado com sucesso!'
//     })

//     } catch (error) {
//         res.status(500).json({
//             message : 'Erro ao atualizar produto!'
//         })
//     }
     
// }

// async function exclud(req, res) {

//     try {
//         const {id} =  req.params;

//         await Produto.deleteProduct(id)
//         res.status(201).json({
//             message : "Produto deletado com sucesso!"
//         })


//     } catch (error) {
//         res.status(404).json({
//             message : "Erro ao deletar usuário!"
//         })
//     }
// }

// async function indexOneCategoria(req, res) {
//     try {
//         const {id} = req.params;
        
//         const produtos_categoria = await Produto.getOneCategoria(id)
//         return res.json(produtos_categoria)
//     } catch (error) {
//         res.status(500).json({
//             error: "Erro ao listar produtos por categoria"
//         })
//     }
   
// }

export default new ProdutoController()