import { cartsModel } from "../models/carts.model.js"
import { BasicMongo } from "./basic.mongo.js"

class CartsMongo extends BasicMongo{
    constructor() {
        super(cartsModel)
    }

    async addProduct(id, product) {
        const cart = await cartsModel.findById(id)
        cart.products.push(product)
        await cart.save()
    }
}

export const cartsMongo = new CartsMongo()