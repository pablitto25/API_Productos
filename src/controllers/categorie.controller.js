import CategoriesModel from "../models/categorie.model.js";



export const createCategorie = async (req, res) => {
    try {
        const exist = await CategoriesModel.findOne({ where: { title: req.body.title } });
        if (exist) {
            res.status(404).json({message : "Ya existe esta categoria"});
        } else {
            await CategoriesModel.create(req.body);
            res.status(200).json({message : "Categoria Creada"});
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getCategories = async (req, res) => {
    try {
        const Categorie = await CategoriesModel.findAll();
        res.status(Categorie.length === 0 ? 404 : 200).json(Categorie.length === 0 ? {message : "No hay categorias almacenadas"} : Categorie);
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getCategorieById = async (req, res) => {
    try {
        const Categorie = await CategoriesModel.findAll({ where: { id: req.params.categorieId } });
        res.status(Categorie.length === 0 ? 404 : 200).json(Categorie.length === 0 ? {message : "Id no encontrado"} : Categorie[0]);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const updateCategorieById = async (req, res) => {
    
    const exist = await CategoriesModel.findOne({ where: { id: req.params.categorieId } });

    if (!exist) {
        res.status(404).json({message : "Categoria no encontrado"});
    } else {
        try {
            await CategoriesModel.update(req.body, { where: { id: req.params.categorieId } });
            res.status(200).json({message : "Categoria actualizado con exito"});
        } catch (error) {
            res.status(500).json({message : "Error al actualizar el categoria"});
        }
    }
}

export const deleteCategorieById = async (req, res) => {

    const exist = await CategoriesModel.findOne({ where: { id: req.params.categorieId } });

    if (!exist) {
        res.status(404).json({message : "Producto no encontrado"});
    } else {
        try {
            await CategoriesModel.destroy({ where: { id: req.params.categorieId } });
            res.status(200).json({message : "Producto eliminado"});
        } catch (error) {
            res.status(500).json({message : "Error al eliminar"});
        }
    }

}