import {usersManager} from '../persistencia/users.manager.js'
import { hashData } from '../utils.js'
import UserDTO from '../persistencia/DTOs/users.dto.js'

export const findAll = () => {
    const users = usersManager.findAll()
    return users
}

export const findById = (id) => {
    const user = usersManager.findById(id)
    return user
}

//supongamos q recibe el objeto {firstName, lastName, email, password}
//pero en la bd se guarda como {fullName, email, password}
export const create = (user) => {
    const hashPassword = hashData(user.password)
    const userDTO = new UserDTO({...user, password: hashPassword})
    const newUser = usersManager.create(userDTO)
    const response = {
        wellcomeString: `Wellcome ${newUser.firstName} ${newUser.lastName}`,
        email: newUser.email,
        password: newUser.password,
    }
    return response
}