import ProductModel from "../models/product.model.js";


export const createProduct = async (req, res) => {
    try {
        const exist = await ProductModel.findOne({ where: { title: req.body.title } });
        if (exist) {
            res.status(404).json({message: "Ya existe este producto"});
        } else {
            await ProductModel.create(req.body);
            res.status(200).json({message: "Producto Creado"});
        }
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll();
        res.status(products.length === 0 ? 404 : 200).json(products.length === 0 ? {message : "No hay productos almacenados"} : products);
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const products = await ProductModel.findAll({ where: { id: req.params.productId } });
        res.status(products.length === 0 ? 404 : 200).json(products.length === 0 ? {message :"Id no encontrado"} : products[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProductById = async (req, res) => {
    const exist = await ProductModel.findOne({ where: { id: req.params.productId } });

    if (!exist) {
        res.status(404).json({message :"Producto no encontrado"});
    } else {
        try {
            await ProductModel.update(req.body, { where: { id: req.params.productId } });
            const respuesta = await ProductModel.findOne({ where: { id: req.params.productId } });
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).json({message : "Error al actualizar el producto"});
        }
    }
}

export const deleteProductById = async (req, res) => {

    const exist = await ProductModel.findOne({ where: { id: req.params.productId } });

    if (!exist) {
        res.status(404).json({message : "Producto no encontrado"});
    } else {
        try {
            await ProductModel.destroy({ where: { id: req.params.productId } });
            res.status(200).json({message : "Producto eliminado"});
        } catch (error) {
            res.status(500).json({message : "Error al eliminar"});
        }
    }
}