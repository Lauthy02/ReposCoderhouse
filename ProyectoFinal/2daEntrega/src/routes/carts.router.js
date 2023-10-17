import { Router } from "express"
import cartsManager from "../managers/carts.manager.js"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const Carts = await cartsManager.FindAll()
        res.status(200).json({ message: "Carts found", carts: Carts })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

//Verificar este post
router.post("/", async (req, res) => {
    const { name, price, stock } = req.body
    if (!name || !price || !stock) {
        return res.status(400).json({ message: "All data is required" })
    }
    try {
        const createdCart = await cartsManager.CreateOne(req.body)
        res.status(200).json({ message: "Cart created", cart: createdCart })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router