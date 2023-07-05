import {Router} from 'express'
const router = Router();

import * as AuthController from '../controllers/auth.controller.js';

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

export default router; 