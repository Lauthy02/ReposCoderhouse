import fs from 'fs'

class CartManager {

    constructor(path) {
        this.path = path
        this.productsList = []
    }

    async GetCarts(){
        try {
            if (fs.existsSync(this.path)) {
                const SavedCarts = await fs.promises.readFile(this.path, 'utf-8')
                return JSON.parse(SavedCarts)
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async GetCartById(cid){
        try {
            const SavedCarts = await this.GetCarts({})
            const CartAux = SavedCarts.find(u=> u.ID_Cart === cid)
            return CartAux
        } catch (error) {
            return error
        }
    }

    async CreateCart(product){
        try {
            const SavedCarts = await this.GetCarts()
            let ID_Cart
            if (!SavedCarts.length) {
                ID_Cart = 1
            } else {
                ID_Cart = SavedCarts[SavedCarts.length - 1].ID_Cart+1
            }
            this.productsList.push(product.ID_Product)
            const NewCart = {ID_Cart,...this.productsList}
            SavedCarts.push(NewCart)
            await fs.promises.writeFile(this.path, JSON.stringify(SavedCarts))
            return NewCart
        } catch (error) {
            return error   
        }
    }
}
//./ProyectoFinal/1erEntrega/Carts.json
export const cartManager = new CartManager('Carts.json')

//#region Pruebas
//Instancio productos
// const Producto1 = {
//     idP: "COD780",
//     Nombre: "Manzana"
// }
// const Producto2 = {
//     idP: "COD781",
//     Nombre: "Pera"
// }
// const Producto3 = {
//     idP: "COD782",
//     Nombre: "Banana"
// }

// const ProductsList_1 = {
//     Products: [1,2,3,4]
// }
// const ProductsList_2 = [Producto1,Producto2,Producto3]
// const ProductsList_3 = [1,2,3,4]

// const ruta = './ProyectoFinal/1erEntrega/Carts.json'

// async function test(){
//     const CM = new CartManager(ruta)
//     await CM.CreateCart(ProductsList_1)
//     await CM.CreateCart(ProductsList_2)
//     await CM.CreateCart(ProductsList_3)
//     console.log('---------- Obtener Carrito de compra ----------')
//     const aux1 = await CM.GetCarts()
//     console.log(aux1);
// }
// test()
//#endregion