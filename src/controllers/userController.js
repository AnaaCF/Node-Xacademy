
const {userService} = require('../services')

const postUser = async (req,res) => {
    const {userName, nombre, apellido, email, password} = req.body; 
    try{
        const newUser = await userService.creatUser({userName, nombre, apellido, email, password});
          res.status(201).json(newUser);
    }  catch(error){
        res.status(500).json({ message: error.message });
    } 
}
const getUser = async (req,res) => {
    const usuarioRquest = req.user;
    console.log(`EL USUARIO QUE LLAMO ES ${usuarioRquest.role}`)
    const userId = req.params.id;

    try{
        const user = await userService.getUser(userId);
        res.status(200).json(user);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const putUser = async(req,res) => {
    const userId = req.params.id;
    const {userName, nombre, apellido, email, password} = req.body;
    try{
        const newUser = await userService.upDateUser(userId,{userName, nombre, apellido, email, password});
          res.status(201).json(newUser); 
    }catch(error){
        res.status(500).json({message: error.message});
    } 
}
const getUsers = async (req,res) => {
    try{
        const allUsers = await userService.getUsers();
        res.status(200).json(allUsers);
    }catch(error){
        res.status(404).json({message: "No se encontraron usuarios"});
    }
}


module.exports = {postUser,getUser, putUser,getUsers};