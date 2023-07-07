import express from 'express';
import { createImg, deleteImg, getAllImgs, getImg, updateImg } from '../controllers/image.controller.js';
import { verifyToken } from '../moddlewares/auth.jwt.js';


const router = express.Router();

router.get('/', getAllImgs);
router.get('/:id', getImg);
router.post('/', verifyToken, createImg);
router.put('/:id', verifyToken, updateImg);
router.delete('/:id', verifyToken, deleteImg);
export default router;