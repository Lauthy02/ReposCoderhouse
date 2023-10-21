import { Router } from "express"
import cartsManager from "../managers/carts.manager.js"

const router = Router()

// api/carts
//#region Get/Obtener
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
        const Cart = await cartsManager.GetPoP(cid)
        if (!Cart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Cart found', Cart })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
//#endregion
//#region Post/Crear
router.post("/", async (req, res) => { //Crea un carrito con lo q le mandes por body
    try {
        const createdCart = await cartsManager.CreateOne(req.body)
        res.status(200).json({ message: "cart created", cart: createdCart })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
    // POST
    // Poner en el body de postman 
    // {
    //     "products":[
    //         {
    //             "productId": "652e6183167b65054e575219",
    //             "quantity": 1
    //         },
    //         {
    //             "productId": "652e65911add683d25a7e670",
    //             "quantity": 1
    //         },
    //         {
    //             "productId": "652e670eb4dc4de8cd923177",
    //             "quantity": 1
    //         }
    //     ]
    // }
})

router.post("/:cid/products/:pid", async (req, res) => { //Agrega productos al carrito
    const { cid, pid } = req.params
    try {
        const createdCart = await cartsManager.AddProductToCart(cid, pid, req.body.quantity)
        res.status(200).json({ message: "Product added", cart: createdCart })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
    // POST
    // Poner el body de postman para editar 1 prod
    // "quantity": x
})
//#endregion
//#region Put/Editar
router.put('/:cid', async (req, res) => { //Pisa todos los products del carrito
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
    // PUT
    // Poner en el body de postman 
    // 
    // 
    // {
    //     "products":[
    //         {
    //             "productId": "652e6183167b65054e575219",
    //             "quantity": 1
    //         },
    //         {
    //             "productId": "652fdf9ce1443d599439c6bb",
    //             "quantity": 1
    //         },
    //         {
    //             "productId": "652fdeb1e1443d599439c6b6",
    //             "quantity": 1
    //         }
    //     ]
    // }
})

router.put('/:cid/products/:pid', async (req, res) => { //Edita la cantidad de 1 prod en 1 carrito
    const { cid, pid } = req.params
    try {
        const createdCart = await cartsManager.UpdateProductInTheCart(cid, pid, req.body.quantity)
        if (!createdCart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Cart edited', createdCart })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
    // PUT
    // Poner el body de postman para editar 1 prod
    // "quantity": x
})
//#endregion
//#region Delete/Borrar
router.delete("/:cid", async (req, res) => { //Elimiar todo el carrito
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

router.delete("/:cid/products", async (req, res) => { //Elimiar todos los productos del carrito
    const { cid } = req.params
    try {
        const deletedCart = await cartsManager.DeleteProductsInTheCart(cid)
        if (!deletedCart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Cart deleted', deletedCart })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete("/:cid/products/:pid", async (req, res) => { //Elimiar del carrito 1 producto 
    const { cid, pid } = req.params
    try {
        const deletedCart = await cartsManager.DeleteProductInTheCart(cid, pid)
        if (!deletedCart) {
            res.status(400).json({ message: 'Cart not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Product deleted', deletedCart })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
//#endregion

export default router
// POST
// Poner en el body de postman para crear o pisar
// {
//     "products":[
//         {
//             "productId": "652e6183167b65054e575219",
//             "quantity": 1
//         },
//         {
//             "productId": "652e65911add683d25a7e670",
//             "quantity": 1
//         },
//         {
//             "productId": "652e670eb4dc4de8cd923177",
//             "quantity": 1
//         }
//     ]
// }
