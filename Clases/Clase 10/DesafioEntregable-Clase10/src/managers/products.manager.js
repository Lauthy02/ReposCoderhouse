import { productsModel } from "../database/models/products.models.js"
import BasicManager from "../../../Clase/src/managers/basic.manager.js"

class ProductsManager extends BasicManager {
    constructor(){
        super(productsModel)
    }
}

const productsManager = new ProductsManager()
export default productsManager;