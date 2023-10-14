import { productsModel } from "../database/models/products.model.js"
import BasicManager from "./basic.manager.js"

class ProductsManager extends BasicManager {
    constructor(){
        super(productsModel)
    }
}

export const productsManager = new ProductsManager()