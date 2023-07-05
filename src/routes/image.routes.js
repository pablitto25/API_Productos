import express from 'express';
import { createImg, deleteImg, getAllImgs, getImg, updateImg } from '../controllers/image.controller.js';



const router = express.Router();

router.get('/', getAllImgs);
router.get('/:id', getImg);
router.post('/', createImg);
router.put('/:id', updateImg);
router.delete('/:id', deleteImg);
export default router;
