import { Router } from 'express';
import { findToys, findToyById,createToy } from '../controllers/toys.controller.js';
//En el caso de tener midelwares se ejectuan acá


const router = Router();

router.get('/', findToys)
router.get('/:id', findToyById)
router.post('/', createToy)

export default router;