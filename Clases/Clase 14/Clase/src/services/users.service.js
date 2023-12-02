import {usersManager} from '../persistencia/users.manager.js'
import { hashData } from '../utils.js'

export const findAll = () => {
    const users = usersManager.findAll()
    return users
}

export const findById = (id) => {
    const user = usersManager.findById(id)
    return user
}

export const create = (user) => {
    const hashPassword = hashData(user.password)
    const newUser = usersManager.create({...user,password:hashPassword})
    const response = {
        wellcomeString: `Wellcome ${newUser.firstName} ${newUser.lastName}`,
        email: newUser.email,
        password: newUser.password,
    }
    return response
}