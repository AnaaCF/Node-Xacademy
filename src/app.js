const express = require('express');
const {initializeDB,sequelize} = require('./config/dbCofing')
const app = express();
const {userRouter, libraryRouter, bookRouter, login, cargarDtados} = require('./routes');
const {authMiddleware, authIsAdmin} = require('./meddleware')
const PORT = 8090;

app.use(express.json());


app.use('/library', authMiddleware, libraryRouter);

app.use('/user', authMiddleware, authIsAdmin, userRouter);

app.use('/book', authMiddleware, bookRouter);

app.use('/login', login);

app.use('/crear',authMiddleware,cargarDtados);

app.listen(PORT, async ()=>{
    await initializeDB();
    console.log(`Iniciando en el puerto: ${PORT}`)
})