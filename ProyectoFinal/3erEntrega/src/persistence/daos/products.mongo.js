import { productsModel } from "../models/products.model.js"
import { BasicMongo } from "./basic.mongo.js"

class ProductsMongo extends BasicMongo{
    constructor() {
        super(productsModel)
    }
}

export const productsMongo = new ProductsMongo()