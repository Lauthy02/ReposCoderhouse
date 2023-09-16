import fs from 'fs'

class ProductManager {

    constructor(path) {
        this.path = path
    }

    async GetProducts() {
        if (fs.existsSync(this.path)) {
            const SavedProducts = await fs.promises.readFile(this.path, 'utf-8')
            return JSON.parse(SavedProducts)
        } else {
            return []
        }
    }

    async GetProductById(pid) {
        const SavedProducts = await this.GetProducts()
        const ProdAux = SavedProducts.find(u => u.id === pid)
        return ProdAux
    }

    async AddProduct(product) {
        const SavedProducts = await this.GetProducts()
        let id
        if (!SavedProducts.length) {
            id = 1
        } else {
            id = SavedProducts[SavedProducts.length - 1].id + 1
        }
        const NewProduct = { id, ...product }
        SavedProducts.push(NewProduct)
        await fs.promises.writeFile(this.path, JSON.stringify(SavedProducts))
        return NewProduct
    }

    async EditProduct(pid, obj) {
        const SavedProducts = await this.GetProducts()
        const index = SavedProducts.findIndex(u => u.id === pid)
        if (index === -1) {
            return -1
        }
        const Product = SavedProducts[index]
        SavedProducts[index] = {...Product, ...obj}
        await fs.promises.writeFile(this.path, JSON.stringify(SavedProducts))
        return 1
    }

    async DeleteProduct(pid) {
        const SavedProducts = await this.GetProducts()
        const Product = SavedProducts.find(u=>u.id === pid)
        if (!Product) {
            return -1
        }
        const SavedProductsAux = SavedProducts.filter(u => u.id !== pid)
        await fs.promises.writeFile(this.path, JSON.stringify(SavedProductsAux))
        return 1
    }

    async DeleteFile() {
        await fs.promises.unlink(this.path)
    }
}

export const productManager = new ProductManager('./Products.json')