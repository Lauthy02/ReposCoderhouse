import { productsModel } from "../models/products.model.js"
import BasicManager from "./basicmanager.mongo.js"

class ProductsManager extends BasicManager {
    constructor(){
        super(productsModel)
    }
}

export const productsManager = new ProductsManager()