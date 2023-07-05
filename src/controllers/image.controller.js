import ImgModel from '../models/image.model';
import fs from 'fs';

export const getAllImgs = async(req,res) =>{
    try {
        const imgs = await ImgModel.findAll();
        res.json(imgs);
    } catch (error) {
        res.json( {message: error.message});
    }
}

export const getImg = async(req,res) => {
    try {
        const img = await ImgModel.findAll({ where: {id:req.params.id}});
        res.json(img[0]);
    } catch (error) {
        json.res({message: error.message});
    }
}


export const createImg = async(req,res) => {
    try {
        await ImgModel.create(req.body);
        res.json({"message" : "File upload Success"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateImg = async(req,res) => {
    try {
        await ImgModel.update(req.body, { where: {id: req.params.id}});
        res.json({"message" : "File updated Success"});
    } catch (error) {
        res.json({message: error.message});
    }
}


export const deleteImg = async(req,res) => {
    try {
        //eliminar imagen de la carpeta images
        const img = await ImgModel.findAll({ where: {id:req.params.id}});
        const imgName = img[0].media_name;
        fs.unlinkSync('uploads/images/'+ imgName);
        // eliminar imagen de la tabla lg_media
        ImgModel.destroy({where: {id: req.params.id}});
        res.json({"message" : "File deleted Success "});
    } catch (error) {
        res.json({message: error.message});
    }
}

    
 


 
      