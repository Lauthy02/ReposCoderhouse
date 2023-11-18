import { Router } from "express"
import productsManager from "../managers/products.manager.js"

const router = Router()

// Entra acá con localhost:8080/api/products

// Obtener todos los productos
router.get("/", async (req, res) => {
    try {
        const Products = await productsManager.FindAll(req.query)
        res.status(200).json({ message: "Products found", response: Products })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get("/AllProdPag", async (req, res) => {
    try {
        const Products = await productsManager.FindAllProducts(req.query)
        res.status(200).json({ message: "Products found", response: Products })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Obtener un producto por ID
router.get("/:pid", async (req, res) => {
    const { pid } = req.params
    try {
        const Product = await productsManager.FindById(pid)
        if (!Product) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Product found', Product })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Crear un producto
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

// Editar un producto
router.put('/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const createdProduct = await productsManager.UpdateOne(pid, req.body)
        if (!createdProduct) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Product edited', createdProduct })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Borrar un producto
router.delete("/:pid", async (req, res) => {
    const { pid } = req.params
    try {
        const deletedProduct = await productsManager.DeleteOne(pid)
        if (!deletedProduct) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Product deleted', deletedProduct })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router