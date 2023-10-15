import { Router } from "express"
import { productsManager } from '../dao/mongodb/productsmanager.mongo.js';

const router = Router()

router.post("/", async (req, res) => {
    const { name, price, stock } = req.body
    if (!name || !price) {
        return res.status(400).json({ message: "All data is required" })
    }
    if (!stock) {
        delete req.body.stock;
    }
    try {
        const createdProduct = await productsManager.CreateOne(req.body)
        res.status(200).json({ message: "Product created", product: createdProduct })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router