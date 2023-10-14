import { usersModel } from "../database/models/users.model.js"
import BasicManager from "./basic.manager.js"

class UsersManager extends BasicManager {
    constructor(){
        super(usersModel)
    }
}

export const usersManager = new UsersManager()