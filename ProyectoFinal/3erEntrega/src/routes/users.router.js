import { Router } from 'express';
import { 
    Controller_findAllUsers, 
    Controller_findUserById, 
    Controller_createUser, 
    Controller_updateUser,
    Controller_deleteUser
} from '../controllers/users.controller.js';

const router = Router();

router.get('/', Controller_findAllUsers)
router.get('/:id', Controller_findUserById)
router.post('/', Controller_createUser)
router.put('/:id', Controller_updateUser)
router.delete('/:id', Controller_deleteUser)

export default router;

//En el caso de tener midelwares se ejectuan acá