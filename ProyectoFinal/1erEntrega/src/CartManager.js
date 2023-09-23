import fs from 'fs'

class CartManager {

    constructor(path) {
        this.path = path
    }

    async GetCarts() {
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

    async GetCartById(cid) {
        try {
            const SavedCarts = await this.GetCarts({})
            const CartAux = SavedCarts.find(u => u.ID_Cart === cid)
            return CartAux
        } catch (error) {
            return error
        }
    }

    async CreateCart(productsList) {
        try {
            const SavedCarts = await this.GetCarts()
            let ID_Cart
            if (!SavedCarts.length) {
                ID_Cart = 1
            } else {
                ID_Cart = SavedCarts[SavedCarts.length - 1].ID_Cart + 1
            }
            const NewCart = { ID_Cart, ...productsList }
            SavedCarts.push(NewCart)
            await fs.promises.writeFile(this.path, JSON.stringify(SavedCarts))
            return NewCart
        } catch (error) {
            return error
        }
    }

    async AddProductToCart(cid, pid) {
        try {
            const SavedCarts = await this.GetCarts({})
            const CartAux = SavedCarts.find(u => u.ID_Cart === +cid)
            if (CartAux) {
                const ProductIndex = CartAux.productsList.findIndex(p => p.ID_Product === +pid)
                console.log(CartAux);
                console.log(ProductIndex);
                if (ProductIndex === -1) {
                    CartAux.productsList.push({ ID_Product: +pid, Quantity: 1 })
                }
                else {
                    CartAux.productsList[ProductIndex].Quantity += 1
                }
                const CartIndex = SavedCarts.findIndex((c) => c.ID_Cart === cid)
                SavedCarts[CartIndex] = CartAux
                await fs.promises.writeFile(this.path, JSON.stringify(SavedCarts))
                return 1
            } else {
                return -1
            }
        } catch (error) {
            return error
        }
    }
}
//./ProyectoFinal/1erEntrega/Carts.json
export const cartManager = new CartManager('Carts.json')

// #region Pruebas
// Instancio productos
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
// const p = [1,3,2]

// const ruta = 'Carts.json'

// async function test(){
//     const CM = new CartManager(ruta)
//     await CM.CreateCart()
//     await CM.CreateCart(ProductsList_1)
//     await CM.CreateCart(p)
//     console.log('---------- Obtener Carrito de compra ----------')
//     const aux1 = await CM.GetCarts()
//     console.log(aux1);
//     console.log('---------- Obtener Carrito de compra por ID ----------')
//     const aux2 = await CM.GetCartById(2)
//     console.log(aux2);
// }
// test()
// #endregion

// #region Mandarle por Postman esto
// {
//     "productsList": [
//         {
//             "ID_Product": 20,
//             "Quantity": 2
//         },
//         {
//             "ID_Product": 21,
//             "Quantity": 5
//         },
//         {
//             "ID_Product": 22,
//             "Quantity": 6
//         },
//         {
//             "ID_Product": 18,
//             "Quantity": 10
//         },
//         {
//             "ID_Product": 11,
//             "Quantity": 11
//         },
//         {
//             "ID_Product": 12,
//             "Quantity": 1
//         }
//     ]
// }
// #endregion