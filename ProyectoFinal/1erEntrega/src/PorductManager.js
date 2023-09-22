import fs from 'fs'

class ProductManager {

    constructor(path) {
        this.path = path
    }

    async GetProducts() {
        try {
            if (fs.existsSync(this.path)) {
                const SavedProducts = await fs.promises.readFile(this.path, 'utf-8')
                return JSON.parse(SavedProducts)
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async GetProductById(pid) {
        try {
            const SavedProducts = await this.GetProducts()
            const ProdAux = SavedProducts.find(u => u.id === pid)
            return ProdAux
        } catch (error) {
            return error
        }
    }

    async CreateProduct(product) {
        try {
            const SavedProducts = await this.GetProducts()
            let ID_Product
            if (!SavedProducts.length) {
                ID_Product = 1
            } else {
                ID_Product = SavedProducts[SavedProducts.length - 1].ID_Product + 1
            }
            const NewProduct = { ID_Product, ...product }
            SavedProducts.push(NewProduct)
            await fs.promises.writeFile(this.path, JSON.stringify(SavedProducts))
            return NewProduct
        } catch (error) {
            return error
        }
    }

    async EditProduct(pid, obj) {
        try {
            const SavedProducts = await this.GetProducts()
            const index = SavedProducts.findIndex(u => u.id === pid)
            if (index === -1) {
                return -1
            }
            const Product = SavedProducts[index]
            SavedProducts[index] = {...Product, ...obj}
            await fs.promises.writeFile(this.path, JSON.stringify(SavedProducts))
            return 1
        } catch (error) {
            return error   
        }
    }

    async DeleteProduct(pid) {
        try {
            const SavedProducts = await this.GetProducts()
            const Product = SavedProducts.find(u=>u.id === pid)
            if (!Product) {
                return -1
            }
            const SavedProductsAux = SavedProducts.filter(u => u.id !== pid)
            await fs.promises.writeFile(this.path, JSON.stringify(SavedProductsAux))
            return 1
        } catch (error) {
            return error
        }
    }

    async DeleteFile() {
        await fs.promises.unlink(this.path)
    }
}

export const productManager = new ProductManager('./ProyectoFinal/1erEntrega/Products.json')