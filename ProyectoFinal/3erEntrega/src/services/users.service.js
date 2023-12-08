import {usersMongo} from "../persistence/daos/users.mongo.js"
import { hashData } from '../utils.js'

export const Service_findAll = () => {
    const users = usersMongo.getAll()
    return users
}

export const Service_findById = (id) => {
    const user = usersMongo.getById(id)
    return user
}

export const Service_create = (user) => {
    const hashPassword = hashData(user.password)
    const response = usersMongo.createOne({...user, password: hashPassword})
    return response
}

export const Service_update = (id, user) => {
    const response = usersMongo.updateById(id, user)
    return response
}

export const Service_delete = (id) => {
    const response = usersMongo.deleteById(id)
    return response
}