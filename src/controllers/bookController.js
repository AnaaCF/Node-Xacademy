const {bookService} = require('../services')
const express = require("express");

const postBook = async (req,res) => {
    const {isbn, titulo, autor, year, library} = req.body;  
    try{
        const newLiBokk = await bookService.creatBook({isbn, titulo, autor, year, library});
          res.status(201).json(newLiBokk);
    }  catch(error){
        res.status(500).json({ message: error.message });
    } 
} 

const getBook = async (req,res) => {
    const usuarioRquest = req.user;
    console.log(`EL USUARIO QUE LLAMÓ ES ${usuarioRquest.user}`)
    const bookid = req.params.id;
    try{
        const book = await bookService.getBook(bookid);
        res.status(200).json(book);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const putBook = async (req,res) => {

    const bookid = req.params.id;
    const {isbn, titulo, autor, year, library} = req.body;  
    try{
        const newLiBokk = await bookService.upDataBook(bookid,{isbn, titulo, autor, year, library});
          res.status(201).json(newLiBokk);
    }  catch(error){
        res.status(500).json({ message: error.message });
    } 
}
const getBooks =async (req, res) => {
    const { titulo, autor, isbn, library, estado } = req.query;
    try {
      let books;
      if (Object.keys(req.query).length !== 0) {
        books = await bookService.getBooks({
          ...(titulo && { titulo }),
          ...(autor && { autor }),
          ...(isbn && { isbn }),
          ...(library && { library }),
          ...(estado && { estado }),
        });
      } else {
        books = await bookService.getBooks();
      }
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}
const deleteBook = async (req,res) => {
    const bookid = req.params.id;
    const {estado}={estado: "ELIMINADO"}
      try{
        await bookService.upDataBook(bookid,{estado});
          res.status(201).json({message: `El libro con id: ${bookid} ha sido eliminada`});
    }  catch(error){
        res.status(500).json({ message: error.message });
    } 
}


module.exports = {postBook, getBook, putBook, getBooks, deleteBook};