const {readFileSync} = require('fs')
const {parse} = require('csv-parse')
const {Book, Library, User} = require('../models')


const crearBook = async (req, res) => {
    try {
      const fileContent = readFileSync('./archivos_CSV/Libro3.csv', 'utf-8');
  
      parse(fileContent, {
        columns: true,
        skip_lines_with_error: true,
        delimiter: ';',
      }, async (error, archivo) => {
        if (error) {
          console.log(`ERROR ${error}`);
          res.status(500).json({ message: 'Error al analizar el archivo CSV' });
          return;
        } 
        try {
          await Book.bulkCreate(archivo);
          res.status(200).json({ message: 'Se cargaron todos los libros' });
        } catch (error) {
          console.log(`ERROR ${error}`);
          res.status(500).json({ message: 'Error al cargar los datos en la base de datos' });
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Error al leer el archivo' });
    }
  };


  const crearLibrary = async (req, res) => {
    try {
      const fileContent = readFileSync('./archivos_CSV/librerias.csv', 'utf-8');
  
      parse(fileContent, {
        columns: true,
        skip_lines_with_error: true,
        delimiter: ';',
      }, async (error, archivo) => {
        if (error) {
          console.log(`ERROR ${error}`);
          res.status(500).json({ message: `Error al ver el archivo` });
          return;
        } 
        try {
          await Library.bulkCreate(archivo);
          res.status(200).json({ message: 'Se cargaron todas las librerías' });
        } catch (error) {
          console.log(`ERROR ${error}`);
          res.status(500).json({ message: `Error al cargar las librerías`});
        }
      });
    } catch (error) {
      console.log(`ERROR ${error}`);
      res.status(500).json({ message: `Error al ver el archivo` });
    }
  };


    
  const crearUser = async (req, res) => {
    try {
      const fileContent = readFileSync('./archivos_CSV/usuarios.csv', 'utf-8');
  
      parse(fileContent, {
        columns: true,
        skip_lines_with_error: true,
        delimiter: ';',
      }, async (error, archivo) => {
        if (error) {
          console.log(`ERROR ${error}`);
          res.status(500).json({ message: `Error al ver el archivo` });
          return;
        } 
        try {
          await User.bulkCreate(archivo);
          res.status(200).json({ message: 'Se cargaron todos los usuarios' });
        } catch (error) {
          console.log(`ERROR ${error}`);
          res.status(500).json({ message: `Error al cargar los usuarios`});
        }
      });
    } catch (error) {
      console.log(`ERROR ${error}`);
      res.status(500).json({ message: `Error al ver el archivo` });
    }
  };
  
  module.exports = { crearBook, crearLibrary, crearUser };