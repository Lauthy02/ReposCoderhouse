import { cartManager } from "../src/CartManager.js";

app.get('/api/carts', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.get('/api/carts:cid', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.post('/api/carts:cid/products/:pid', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error })
    }
})