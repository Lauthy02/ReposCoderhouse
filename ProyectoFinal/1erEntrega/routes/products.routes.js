import { productManager } from "../src/PorductManager.js";

app.get('/api/products', async (req, res) => {
    const { limit } = req.query
    try {
        const AllProducts = await productManager.GetProducts()
        if (!AllProducts.length) {
            res.status(200).json({ message: 'No products found' })
        } else {
            if (limit) {
                const PorductsLimit = []
                for (let a = 0; a < limit; a++) {
                    const Product = AllProducts[a];
                    PorductsLimit.push(Product)
                }
                res.status(200).json({ message: 'Product/s found with the sent limit', PorductsLimit })
            } else {
                res.status(200).json({ message: 'Product/s found', AllProducts })
            }
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.get('/api/products/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const Product = await productManager.GetProductById(+pid)
        if (!Product) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Product found', Product })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const NewProduct = await productManager.AddProduct(req.body)
        res.status(200).json({ message: 'Product created', NewProduct })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.put('/api/products/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const Answer = await productManager.EditProduct(+pid, req.body)
        if (Answer === -1) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Edited product' })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.delete('/api/products/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const Answer = await productManager.DeleteProduct(+pid)
        if (Answer === -1) {
            res.status(400).json({ message: 'Product not found with the sent ID' })
        } else {
            res.status(200).json({ message: 'Product removed' })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})