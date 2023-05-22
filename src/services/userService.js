const {userProvider} = require('../provides')
const creatUser = async (userOptions) => {
    return await userProvider.creatUser(userOptions);
}
const getUser = async (userId) => {
    return await userProvider.getUser(userId);
}
const upDateUser = async (userId,userOptions)=>{
    return await userProvider.upDataUser(userId,userOptions);
}
const getUsers = async () => {
    return await userProvider.getUsers();
}

module.exports = {creatUser,getUser, upDateUser,getUsers};