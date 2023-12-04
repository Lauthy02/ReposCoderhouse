import { Router } from 'express';
import { usersController } from '../controllers/users.controller.js';

const router = Router()

router.get('/', usersController.FindAllUsers)
router.get('/:id', usersController.FindUserById)
router.post('/', usersController.CreateUser)

export default router