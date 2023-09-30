import { Router } from 'express'
import { productManager } from "../managers/porducts.manager.js";

const router = Router()

router.get('/', async (req, res) => {
    const { limit } = req.query
    try {
        const AllProducts = await productManager.GetProducts()
        if (!AllProducts.length) {
            res.status(200).json({ message: 'No products found' })
        } else {
            if (limit) {
                const PorductsLimit = []
                for (let a = 0; a < limit; a++) {
                    const Product = AllProducts[a];
                    PorductsLimit.push(Product)
                }
                res.status(200).json({ message: 'Products found with the sent limit', PorductsLimit })
            } else {
                res.status(200).json({ message: 'Products found', AllProducts })
            }
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.get('/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const Product = await productManager.GetProductById(+pid)
        if (!Product) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Product found', Product })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.post('/', async (req, res) => {
    try {
        const NewProduct = await productManager.CreateProduct(req.body)
        res.status(200).json({ message: 'Product created', NewProduct })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.put('/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const Answer = await productManager.EditProduct(+pid, req.body)
        if (Answer === -1) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Edited product' })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.delete('/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const Answer = await productManager.DeleteProduct(+pid)
        if (Answer === -1) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Product removed' })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

export default router