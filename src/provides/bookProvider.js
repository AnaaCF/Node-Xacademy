const { Op, where } = require("sequelize");
const {Book} = require('../models');
const libraryProvider = require('./libraryProvider')

const creatBook = async (bookOptions) => {
    try {
        await libraryProvider.getLibrary(bookOptions.library);
        const newBook = await Book.create(bookOptions);
        return newBook;
    }catch (error) { 
       throw error;
    }
}

const getBook = async (id) => {
    try{
        const book = await Book.findByPk(id);
        
        if(book){
            if(book.estado === "EXISTENTE"){
                return book;
            }else{
                throw new Error (`El libro con identificación id: ${id} ha sido ELIMINADO`)
            }
        }else{
            throw new Error (`El libro con identificación id: ${id} no se ha encontrado`)
        }
    }catch(error){
        throw error;
    }
}


const upDataBook = async (bookId, bookOptions) => {
    try{
        await getBook(bookId);
        console.log(bookOptions)
        const [numRowsUpdated] = await Book.update(bookOptions, {where: {id: bookId}});
        console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
        return Book.findByPk(bookId);
    }catch(error){
        throw error;
    }
}

const getBooks = async() => {
    try{
        const allBooks = await Book.findAll({
            attributes: ['id','titulo','libraryId','estado'
        ]});
        return allBooks;
    }catch(error){
        throw error;
    }
} 

module.exports = {creatBook,getBook, upDataBook, getBooks};