import { usersModel } from "../database/models/users.model.js"
import BasicManager from "./basic.manager.js"

class UsersManager extends BasicManager {
    constructor(){
        super(usersModel)
    }

    async FindByEmail(email){
        const response = await usersModel.findOne({email})
        return response
    }
}

const usersManager = new UsersManager()
export default usersManager;