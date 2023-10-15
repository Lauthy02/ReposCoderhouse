import { cartsModel } from "../models/carts.model.js"
import BasicManager from "./basicmanager.mongo.js"

class CartsManager extends BasicManager {
    constructor(){
        super(cartsModel)
    }
}

export const cartsManager = new CartsManager()