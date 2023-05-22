const {libraryService} = require('../services')

const postLibrary = async (req,res) => {
    const {name, location, telefono} = req.body;  
    try{
        const newLibrary = await libraryService.creatLibrary({name, location, telefono});
          res.status(201).json(newLibrary);
    }  catch(error){
        res.status(500).json({ message: error.message });
    } 
}

const getLibrary = async (req,res) => {
    const libraryId = req.params.id;
    try{
        const library = await libraryService.getLibrary(libraryId);
        res.status(200).json(library);
    }catch(error){
        res.status(404).json({ massege: error.massege});
    }
}

const putlibrary = async (req,res) => {
    const libraryid = req.params.id;
    const {name, location, telefono} = req.body;  
    try{
        const newLibrary = await libraryService.upDataLibrary(libraryid,{name, location, telefono});
          res.status(201).json(newLibrary);
    }  catch(error){
        res.status(500).json({ message: error.message });
    } 
}
const getLibraries = async (req,res)=> {
    try{
        const allLibraries = await libraryService.getLibraries();
        res.status(200).json(allLibraries);
    }catch(error){
        res.status(404)
    }
}
const deleteLibrary = async (req,res) => {
    const LibraryId = req.params.id;
    const {estado}={estado: "ELIMINADO"}
      try{
        await libraryService.upDataLibrary(LibraryId,{estado});
        res.status(201).json({message: `La librería con id: ${LibraryId} ha sido eliminada`});
    }  catch(error){
        res.status(500).json({ message: error.message });
    } 
}


module.exports = {postLibrary, getLibrary, putlibrary, getLibraries, deleteLibrary};