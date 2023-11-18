import { cartsModel } from "../database/models/carts.model.js"
import BasicManager from "./basic.manager.js"

class CartsManager extends BasicManager {
    constructor(){
        super(cartsModel, "products.product")
    }
}

const cartsManager = new CartsManager()
export default cartsManager;