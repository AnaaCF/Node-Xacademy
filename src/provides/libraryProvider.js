const { Op, where } = require("sequelize");
const {Library} = require('../models');

const creatLibrary = async (libraryOptions) => {
    try{
        newLibrary = await Library.create(libraryOptions);
        
        return newLibrary;
    }catch(error){
        throw error;
    }
}

const getLibrary = async (libraryId) => {
    
    try{
       
        const library = await Library.findByPk(libraryId, { include: [{ all: true }] });
        if(library){
            if( library.estado === "EXISTENTE"){
                return library;
            }else{
                throw new Error (`El libro con identificación id: ${libraryId} ha sido ELIMINADO`)
            }
        }else{
            throw new Error (`La librería con identificación id: ${libraryId} no se ha encontrado`)
        }
    }catch(error){
        throw error;
    }
}

const upDataLibrary = async (libraryid, libraryOptions) => {
    try{
        await getLibrary(libraryid);
        const [numRowsUpdated] = await Library.update(libraryOptions, {where: {id: libraryid}});
        console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
        return Library.findByPk(libraryid);
    }catch(error){
        throw error;
    }
}

const getLibraries = async() => {
    try{
        const allLibraries = await Library.findAll({
            attributes: ['id','name','location','telefono','estado']
        });
        return allLibraries;
    }catch(error){
        throw error;
    }
}

module.exports = {creatLibrary, getLibrary, upDataLibrary, getLibraries};
