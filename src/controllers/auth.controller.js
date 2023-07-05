import UserModel from "../models/User.model";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from "../config";
import RolesModel from "../models/Roles.model.js";

export const signup = async (req, res) => {

    const { username, email, password, roleId } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        const newUser = ({
            username,
            email,
            password: hashedPassword,
        });

        
        if (roleId) {
            const foundRoles = await RolesModel.findAll({ where: { name: roleId } });
            newUser.roleId = foundRoles.map((role) => role.id);
          } else {
            const role = 1;
            newUser.roleId = role;
          }

          const userNew = await UserModel.create(newUser);
        const token = jwt.sign({id: userNew.username}, config.SECRET, {
            expiresIn: 86400 //24 Horas
        })
        res.status(200).json({token})
        
    } catch (error) {
      res.json({message: error.message});
    }
    
     
        
    
}

export const signin = async (req, res) => {
    const {password} = req.body;
    const userFound = await UserModel.findOne({ where: { email: req.body.email }, include: RolesModel });

    if(!userFound) return res.status(400).json({message: "User not found"})
    

    const passwordMatch = bcrypt.compareSync( password, userFound.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({id: userFound.id}, config.SECRET, {
      expiresIn: 86400
    })

    res.json({token})
}
