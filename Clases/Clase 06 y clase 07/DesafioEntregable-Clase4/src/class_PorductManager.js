import fs from 'fs'

class ProductManager {

    constructor(ruta) {
        this.ruta = ruta
    }

    async ObtenerPoductos() {
        if (fs.existsSync(this.ruta)) {
            const ProductosGuardados = await fs.promises.readFile(this.ruta, 'utf-8')
            return JSON.parse(ProductosGuardados)
        } else {
            return []
        }
    }

    async AgregarProducto(producto) {
        const ProductosGuardados = await this.ObtenerPoductos()
        let id
        if (!ProductosGuardados.length) {
            id = 1
        } else {
            id = ProductosGuardados[ProductosGuardados.length - 1].id + 1
        }
        const NuevoProducto = { id, ...producto }
        ProductosGuardados.push(NuevoProducto)
        await fs.promises.writeFile(this.ruta, JSON.stringify(ProductosGuardados))
        return NuevoProducto
    }

    async EditarProducto(IDProducto, objeto) {
        const ProductosGuardados = await this.ObtenerPoductos()
        const index = ProductosGuardados.findIndex(u => u.id === IDProducto)
        if (index === -1) {
            return -1
        }
        const Producto = ProductosGuardados[index]
        ProductosGuardados[index] = {...Producto, ...objeto}
        await fs.promises.writeFile(this.ruta, JSON.stringify(ProductosGuardados))
        return 1
    }

    async BorrarProducto(IDProducto) {
        const ProductosGuardados = await this.ObtenerPoductos()
        const Producto = ProductosGuardados.find(u=>u.id === IDProducto)
        if (!Producto) {
            return -1
        }
        const ProductosGuardadosAux = ProductosGuardados.filter(u => u.id !== IDProducto)
        await fs.promises.writeFile(this.ruta, JSON.stringify(ProductosGuardadosAux))
        return 1
    }

    async ObtenerProductoPorID(IDProducto) {
        const ProductosGuardados = await this.ObtenerPoductos()
        const ProdAux = ProductosGuardados.find(u => u.id === IDProducto)
        return ProdAux
    }

    async BorrarArchivo() {
        await fs.promises.unlink(this.ruta)
    }
}

//Creo una instancia de ProductManager y la exporto
export const productManager = new ProductManager('./Productos.json')