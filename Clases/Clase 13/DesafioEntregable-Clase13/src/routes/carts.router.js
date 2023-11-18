import { Router } from "express"
import cartsManager from "../managers/carts.manager.js"
import productsManager from "../managers/products.manager.js"

const router = Router()

// Entra acá con localhost:8080/api/carts

// Obtener todos los carritos
router.get("/", async (req, res) => {
    try {
        const carts = await cartsManager.FindAll()
        res.status(200).json({message: "carts found", carts})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Obtener un carrito por id
router.get("/:idCart", async (req, res) => {
    try {
        const { idCart } = req.params
        const cart = await cartsManager.FindById(idCart)
        res.status(200).json({message: "cart found", cart})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Crear un carrito
router.post("/", async (req, res) => {
    try {
        const prod = {products: []}
        const createdCart = await cartsManager.CreateOne(prod)
        res.status(200).json({message: "cart created", createdCart})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Agregar un producto a un carrito
router.post("/:idCart/products/:idProduct", async (req, res) => {
    try {
        const { idCart, idProduct } = req.params
        const cart = await cartsManager.FindAll(idCart)
        if (!cart) {
            return res.status(404).json({message: "cart not found"})
        }
        const product = await productsManager.FindById(idProduct)
        if (!product) {
            return res.status(404).json({message: "product not found"})
        }
        const productIndex = cart.products.findIndex((prod) => prod.product.equals(idProduct))
        if (productIndex === -1) {
            cart.products.push({product: idProduct, quantity: 1})
        }
        else {
            cart.products[productIndex].quantity++
        }
        await car.save()
        res.status(200).json({message: "product added"})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

export default router