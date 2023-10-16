import { cartsModel } from "../database/models/carts.models.js"
import BasicManager from "./basic.manager.js"

class CartsManager extends BasicManager {
    constructor(){
        super(cartsModel)
    }
}

const cartsManager = new CartsManager()
export default cartsManager;