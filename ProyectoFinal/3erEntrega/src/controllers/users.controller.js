import { 
    Service_findAll, 
    Service_findById, 
    Service_create, 
    Service_update,
    Service_delete
} from "../services/users.service.js";

export const Controller_findAllUsers = (req, res) => {
    const users = Service_findAll()
    if (!users.lenght) {
        return res.status(404).json({ message: "No users found" })
    }
    res.status(200).json({ message: "Users found", users })
}

export const Controller_findUserById = (req, res) => {
    const { id } = req.params
    const user = Service_findById(+id)
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    res.status(200).json({ message: "User found", user })
}

export const Controller_createUser = (req, res) => {
    const { firstName, lastName, email, password } = req.body
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "Missing fields" })
    }
    const newUser = Service_create(req.body)
    res.status(201).json({ message: "User created", user: newUser })
}

export const Controller_updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, email } = req.body
    if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: "Missing fields" })
    }
    const updatedUser = Service_update(+id, req.body)
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" })
    }
    res.status(200).json({ message: "User updated", updatedUser })
}

export const Controller_deleteUser = (req, res) => {
    const { id } = req.params
    const deletedUser = Service_delete(+id)
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" })
    }
    res.status(200).json({ message: "User deleted", deletedUser })
}