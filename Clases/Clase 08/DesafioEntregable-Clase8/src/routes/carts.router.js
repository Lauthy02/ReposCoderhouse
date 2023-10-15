import { Router } from "express"
import { cartsManager } from '../dao/mongodb/cartsmanager.mongo.js';

const router = Router()

router.post("/", async (req, res) => {
    const { number, product} = req.body
    if (!number || !product) {
        return res.status(400).json({ message: "All data is required" })
    }
    try {
        const createdCart = await cartsManager.CreateOne(req.body)
        res.status(200).json({ message: "Cart created", product: createdCart })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router