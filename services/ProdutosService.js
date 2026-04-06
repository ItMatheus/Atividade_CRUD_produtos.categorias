import Produto from "../models/produtos.js";

class ProdutoService{
    async listar(){
        return await Produto.getAll()
    }

    async criarProduto(data){
        if(!data.nome){
            throw new Error("Nome do produto é obrigatório")
        }

        if(!data.preco || data.preco <= 0){
            throw new Error("Preço Inválido!")
        }

        return await Produto.criarProduto(data)   }

    async atualizar(id, data){
        if(!id){
            throw new Error("ID do Produto é obrigatório")
        }

        return await Produto.updateProduct(id, data)
    }

    async destroy(id){
        if(!id){
            throw new Error("ID do Produto é obrigatório")
        }
        return await Produto.deleteProduct(id)
    }
}


export default new ProdutoService()