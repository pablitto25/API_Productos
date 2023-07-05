import db from '../database.js';
import { DataTypes } from 'sequelize';

export const ROLES = ["user", "admin", "moderator"];


const RolesModel = db.define('roles', {

    name: {type: DataTypes.STRING}
    
  });

 export default RolesModel;