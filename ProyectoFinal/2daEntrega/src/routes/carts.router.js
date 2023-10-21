import { Router } from "express"
import cartsManager from "../managers/carts.manager.js"

const router = Router()

// api/carts
// Get/Obtener
router.get("/", async (req, res) => {
    try {
        const Carts = await cartsManager.FindAll()
        res.status(200).json({ message: "Carts found", carts: Carts })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get("/:cid", async (req, res) => {
    const { cid } = req.params
    try {
        const Cart = await cartsManager.FindById(cid)
        if (!Cart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Cart found', Cart })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Post/Crear
router.post("/", async (req, res) => {
    try {
        const createdCart = await cartsManager.CreateOne(req.body)
        res.status(200).json({ message: "cart created", cart: createdCart })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Put/Editar
router.put('/:cid', async (req, res) => {
    const { cid } = req.params
    try {
        const createdCart = await cartsManager.UpdateOne(cid, req.body)
        if (!createdCart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Cart edited', createdCart })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Delete/Borrar
router.delete("/:cid", async (req, res) => { //borra todo el carrito
    const { cid } = req.params
    try {
        const deletedCart = await cartsManager.DeleteOne(cid)
        if (!deletedCart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Cart deleted', deletedCart })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete("/:cid/products/:pid", async (req, res) => { //borra 1 prod del carrito
    const { cid, pid } = req.params
    try {
        const deletedCart = await cartsManager.DeleteOneProdOfTheCart(cid,pid)
        if (!deletedCart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Cart deleted', deletedCart })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})



export default router

// Poner en el post de postman
// {
//     "products":[
//         {
//             "product": "652e6183167b65054e575219",
//             "quantity": 1
//         },
//         {
//             "product": "652e65911add683d25a7e670",
//             "quantity": 1
//         },
//         {
//             "product": "652e670eb4dc4de8cd923177",
//             "quantity": 1
//         },
//     ]
// }