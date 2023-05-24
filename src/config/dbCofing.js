const { Sequelize } = require('sequelize');


//inicializo la BD
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

//llamada para coneccion a la BD
const initializeDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conección a la base de datos establecida');
        await sequelize.sync({ force: false });
      } catch (error) {
        console.error('Hubo un error al iniciar la base de datos:', error);
      }
}

module.exports = {sequelize, initializeDB};