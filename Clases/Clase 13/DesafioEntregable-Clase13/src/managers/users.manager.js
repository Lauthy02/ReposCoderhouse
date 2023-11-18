import { usersModel } from "../database/models/users.model.js"
import BasicManager from "./basic.manager.js"

class UsersManager extends BasicManager {
    constructor(){
        super(usersModel, "cart")
    }

    async FindByEmail(email){
        return usersModel
        .findOne({email})
        .populate({path: "cart", populate: {path: "products.product"}})
    }
}

const usersManager = new UsersManager()
export default usersManager;