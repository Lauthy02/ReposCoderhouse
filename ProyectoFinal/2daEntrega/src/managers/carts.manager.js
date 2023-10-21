import { cartsModel } from "../database/models/carts.models.js"
import BasicManager from "./basic.manager.js"

class CartsManager extends BasicManager {
    constructor(){
        super(cartsModel)
    }

    async GetPoP(cartId){
        return this.model.findById(cartId).populate({ path: "products.productId" })
    }

    async AddProductToCart(cartId,prodId,quantity){
        const foundCart = await this.FindById(cartId)
    
        if (!foundCart) {
            throw new Error("Cart not found");
        }
    
        const foundProduct = foundCart.products.find((product) => product.productId.toString() === prodId)
    
        if (foundProduct) {
            foundProduct.quantity = foundProduct.quantity + +quantity;
        } else {
            foundCart.products = [
                ...foundCart.products,
                ...[{ productId: prodId, quantity: quantity }],
            ];
        }
        await foundCart.save();
        const cart = await this.FindById(cartId)
        return cart;
    }

    async UpdateProductInTheCart(cartId,prodId,quantity){ //Edita la cantidad de 1 prod en 1 carrito
        const foundCart = await this.FindById(cartId)

        if (!foundCart) {
            return "Cart not found";
        }
  
        const foundProduct = foundCart.products.find(
          (product) => product.productId.toString() === prodId
        );
  
        if (foundProduct) {
          foundProduct.quantity = quantity;
        } else {
          return "Product not found" ;
        }
  
        await foundCart.save();
        const cart = await this.FindById(cartId)
        return cart;
    }

    async DeleteProductsInTheCart(cartId){ //Elimiar todos los productos del carrito
        const foundCart = await this.FindById(cartId)

        if (!foundCart) {
          return "Cart not found";
        }
  
        foundCart.products = [];
  
        await foundCart.save();
        const cart = await this.FindById(cartId)
        return cart
    } 

    async DeleteProductInTheCart(cartId,prodId){ //Elimiar del carrito 1 producto
        const foundCart = await this.FindById(cartId);

        if (!foundCart) {
          return "Cart not found";
        }

        foundCart.products = foundCart.products.filter(
          (product) => product.productId.toString() !== prodId
        );
  
        await foundCart.save();
        const cart = await this.FindById(cartId)
        return cart
    }
}

const cartsManager = new CartsManager()
export default cartsManager;