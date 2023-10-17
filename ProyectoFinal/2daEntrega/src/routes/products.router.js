import { Router } from "express"
import productsManager from "../managers/products.manager.js"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const Products = await productsManager.FindAll()
        res.status(200).json({ message: "Products found", products: Products })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post("/", async (req, res) => {
    const { name, price, stock } = req.body
    if (!name || !price || !stock) {
        return res.status(400).json({ message: "All data is required" })
    }
    if (!stock) {
        delete req.body.description;
    }
    try {
        const createdProduct = await productsManager.CreateOne(req.body)
        res.status(200).json({ message: "Product created", product: createdProduct })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router