const userRouter = require('./userRoute');
const libraryRouter = require('./libraryRoute');
const bookRouter = require('./bookRoute');
const login = require('./loginRoute');
const cargarDtados = require('./cargarDatosRoute')

module.exports = {userRouter, libraryRouter, bookRouter, login, cargarDtados};