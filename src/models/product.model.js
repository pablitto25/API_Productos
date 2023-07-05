import DB from '../database.js';
import { DataTypes } from 'sequelize';


const ProductModel = DB.define('products', {
    title: {type: DataTypes.STRING},
    slug: {type: DataTypes.STRING}, 
    description: {type: DataTypes.STRING}, 
    color: {type: DataTypes.STRING}, 
    size: {type: DataTypes.STRING}, 
    price: {type: DataTypes.DECIMAL}, 
    old_price: {type: DataTypes.DECIMAL},
    discount_rate: {type: DataTypes.NUMBER},
    category_id: {type: DataTypes.NUMBER},
    img: {type: DataTypes.STRING},
 });

 export default ProductModel;