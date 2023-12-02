import { findAll,findById,create } from "../services/users.service.js";

export const findUsers = (req, res) => {
    const users = findAll()
    if (!users.lenght) {
        return res.status(404).json({ message: "No users found" })
    }
    res.status(200).json({ message: "Users found",users })
}

export const findUserById = (req, res) => {
    const { id } = req.params
    const user = findById(+id)
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    res.status(200).json({ message: "User found", user })
}

export const createUser = (req, res) => {
    const { name,lastName,email,password } = req.body
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "Missing fields" })
    }
    const newUser = create(req.body)
    res.status(201).json({ message: "User created", user: newUser })
}