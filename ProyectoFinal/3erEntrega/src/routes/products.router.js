import { Router } from 'express';
import { 
    Controller_findAllProducts, 
    Controller_findProductById, 
    Controller_createProduct, 
    Controller_updateProduct, 
    Controller_deleteProduct
} from '../controllers/products.controller.js';

const router = Router();

router.get('/', Controller_findAllProducts)
router.get('/:id', Controller_findProductById)
router.post('/', Controller_createProduct)
router.put('/:id', Controller_updateProduct)
router.delete('/:id', Controller_deleteProduct)

export default router;

//En el caso de tener midelwares se ejectuan acá