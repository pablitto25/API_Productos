import db from '../database.js';
import { DataTypes } from 'sequelize';
import RolesModel from './Roles.model.js';
import bcrypt from 'bcryptjs';


 const UserModel = db.define('users', {

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      roleId: {
        type: DataTypes.INTEGER,
        },
  });


  UserModel.belongsTo(RolesModel, { foreignKey: 'roleId' });

  UserModel.prototype.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };


 export default UserModel;