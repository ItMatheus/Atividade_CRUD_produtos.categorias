import pool from "../database/connection.js"

async function getAllCategorias() {
    const [rows] = await pool.query('SELECT * FROM categoria')
    return rows
}

async function getCategoriasEspecific(id) {

    const [rows] = await pool.query('SELECT * FROM categoria WHERE id = ?', [id])

    return rows
}

async function createCategorias(categoria) {

    const{
        nome,
        descricao
    } = categoria

    const [result] = await pool.query(`INSERT INTO categoria (
        nome, descricao
    )VALUES(?, ?)`,[nome, descricao]) 
    return result.insertId
}

async function updateCategorias(id, categoria){
    const{  
        nome,
        descricao
    } = categoria

    const [result] = await pool.query(`UPDATE categoria SET 
        nome = ?, 
        descricao = ?
        WHERE id = ?`,
        [
        nome,
        descricao,
        id
        ]
    )
    return result


}

async function deleteCategoria(id) {
    
    const[result] = await pool.query(`DELETE FROM categoria WHERE id = ?`, [id])

    return result
}


export default {getAllCategorias, getCategoriasEspecific, createCategorias, deleteCategoria, updateCategorias}