import {Router} from 'express'
import { updateProductById, deleteProductById, getProducts, getProductById, createProduct } from '../controllers/products.controller.js';
import { verifyToken } from '../moddlewares/auth.jwt.js';

const router = Router();

router.get('/', getProducts);

router.post('/', verifyToken, createProduct);

router.get('/:productId', getProductById);
router.put('/:productId', verifyToken, updateProductById);
router.delete('/:productId', verifyToken, deleteProductById);

export default router;