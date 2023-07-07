import db from "../database";
import {DataTypes} from 'sequelize';

const ImgModel = db.define('images', {
    image_url: {type: DataTypes.STRING},
    video_url: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    alt: {type: DataTypes.STRING},
});


export default ImgModel;