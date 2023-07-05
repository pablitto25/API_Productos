import DB from '../database.js';
import { DataTypes } from 'sequelize';


const CategoriesModel = DB.define('categories', {
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
 });

 export default CategoriesModel;