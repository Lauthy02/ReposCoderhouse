import { 
    Service_findAll, 
    Service_findById, 
    Service_create, 
    Service_update,
    Service_delete
} from "../services/products.service.js"

export const Controller_findAllProducts = (req, res) => {
    const products = Service_findAll()
    if (!products.lenght) {
        return res.status(404).json({ message: "No products found" })
    }
    res.status(200).json({ message: "Products found", products })
}

export const Controller_findProductById = (req, res) => {
    const { id } = req.params
    const product = Service_findById(+id)
    if (!product) {
        return res.status(404).json({ message: "Product not found" })
    }
    res.status(200).json({ message: "Product found", product })
}

export const Controller_createProduct = (req, res) => {
    const { name, price } = req.body
    if (!name || !price) {
        return res.status(400).json({ message: "Missing fields" })
    }
    const newProduct = Service_create(req.body)
    res.status(201).json({ message: "Product created", product: newProduct })
}

export const Controller_updateProduct = (req, res) => {
    const { id } = req.params
    const { price, stock } = req.body
    if (!price || !stock) {
        return res.status(400).json({ message: "Missing fields" })
    }
    const updatedProduct = Service_update(+id, req.body)
    if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" })
    }
    res.status(200).json({ message: "Product updated", updatedProduct })
}

export const Controller_deleteProduct = (req, res) => {
    const { id } = req.params
    const deletedProduct = Service_delete(+id)
    if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" })
    }
    res.status(200).json({ message: "Product deleted", deletedProduct })

}