import jwt from 'jsonwebtoken';
import config from '../config.js';
import UserModel from '../models/User.model.js';

export const verifyToken = async(req,res,next) => {
   try {
    const token =  req.headers["x-access-token"];

    if(!token) return res.status(403).json({message: "Token invalido o no ha sido ingresado"});

    const decoded = jwt.verify(token, config.SECRET);
     const user = await UserModel.findByPk(decoded.id, {password: 0})
     if(!user) return res.status(404).json({message: 'usuario no existe'})
     
   next()
   } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
   }
}