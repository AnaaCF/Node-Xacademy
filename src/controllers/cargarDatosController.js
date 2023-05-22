const {readFileSync} = require('fs')
const {parse} = require('csv-parse')
const {Book, Library} = require('../models')


const crearBook = async (req, res) => {
    try {
      const fileContent = readFileSync('./archivos_CSV/Libro3.csv', 'utf-8');
  
      parse(fileContent, {
        columns: true,
        skip_lines_with_error: true,
        delimiter: ';',
      }, async (err, records) => {
        if (err) {
          console.error('Error al analizar el archivo CSV:', err);
          res.status(500).json({ message: 'Error al analizar el archivo CSV' });
          return;
        } 
        try {
 
          await Book.bulkCreate(records);
  
          res.status(200).json({ message: 'Datos cargados exitosamente' });
        } catch (error) {
          console.error('Error al cargar los datos en la base de datos:', error);
          res.status(500).json({ message: 'Error al cargar los datos en la base de datos' });
        }
      });
    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
      res.status(500).json({ message: 'Error al leer el archivo CSV' });
    }
  };

  const crearLibrary = async (req, res) => {
    try {
      const fileContent = readFileSync('./archivos_CSV/librerias.csv', 'utf-8');
  
      parse(fileContent, {
        columns: true,
        skip_lines_with_error: true,
        delimiter: ';',
      }, async (err, records) => {
        if (err) {
          console.error('Error al analizar el archivo CSV:', err);
          res.status(500).json({ message: 'Error al analizar el archivo CSV' });
          return;
        } 
        try {
 
          await Library.bulkCreate(records);
  
          res.status(200).json({ message: 'Datos cargados exitosamente' });
        } catch (error) {
          console.error('Error al cargar los datos en la base de datos:', error);
          res.status(500).json({ message: 'Error al cargar los datos en la base de datos' });
        }
      });
    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
      res.status(500).json({ message: 'Error al leer el archivo CSV' });
    }
  };

  
  module.exports = { crearBook, crearLibrary };