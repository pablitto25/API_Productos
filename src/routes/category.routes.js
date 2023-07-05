import {Router} from 'express'
import { updateCategorieById, getCategorieById, getCategories, deleteCategorieById, createCategorie } from '../controllers/categorie.controller.js';
import { verifyToken } from '../moddlewares/auth.jwt.js';

const router = Router();

router.get('/', getCategories);
router.post('/', verifyToken, createCategorie);
router.get('/:categorieId', getCategorieById);
router.put('/:categorieId', verifyToken, updateCategorieById);
router.delete('/:categorieId', verifyToken, deleteCategorieById);

export default router;