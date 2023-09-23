import { Router } from 'express'
import { cartManager } from "../CartManager.js";

const router = Router()

router.get('/', async (req, res) => {
    try {
        const AllCarts = await cartManager.GetCarts()
        if (!AllCarts.length) {
            res.status(200).json({ nessage: 'No carts found' })
        } else {
            res.status(200).json({ message: 'Carts found', AllCarts })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.get('/:cid', async (req, res) => {
    const { cid } = req.params
    try {
        const Cart = await cartManager.GetCartById(+cid)
        if (!Cart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Cart found', Cart })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.post('/', async (req, res) => {
    try {
        const NewCart = await cartManager.CreateCart(req.body)
        res.status(200).json({ message: 'Cart created', NewCart })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.post('/:cid/product/:pid', async (req, res) => {
    const { cid } = req.params
    const { pid } = req.params
    try {
        const Answer = await cartManager.AddProductToCart(+cid, +pid)
        if (Answer === -1) {
            res.status(400).json({ message: 'Not added product to cart' })
        } else {
            res.status(200).json({ message: 'Added product to cart' })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

export default router