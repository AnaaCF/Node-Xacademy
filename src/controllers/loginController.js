const jwt = require("jsonwebtoken");
const {secret} = require('../meddleware');
const {userProvider}= require('../provides');

const postLogin = async (req, res) => {
    const { userName, password } = req.body;
    // Verificación de que los datos del usuario son correctos
  
    if (userName === "admin" && password === "admin") {
      const token = jwt.sign({ userName, role: "Admin" }, secret);
      res.json({ token });
    } else {
      const dbUser = await userProvider.validateUser(userName, password);
      if (dbUser) {
        const token = jwt.sign({ user: dbUser.userName }, secret);
        res.json({ token });
      } else {
        res.status(401).json({ message: "Autenticación fallida" });
      }
    }
}

module.exports = {postLogin};