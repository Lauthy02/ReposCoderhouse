import { Router } from "express"
import { usersManager } from '../managers/users.manager.js';
import { create } from "express-handlebars";

const router = Router()

router.get("/", async (req, res) => {
    try {
        const users = await usersManager.FindAll()
        res.status(200).json({ message: "Users", users })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get("/:idUser", async (req, res) => {
    const {idUser} = req.params
    try {
        const userFind = await usersManager.FindById(idUser)
        res.status(200).json({ message: "User find", userFind })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post("/", async (req, res) => {
    const { first_name, last_name, email, password } = req.body
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ message: "All data is required" })
    }
    try {
        const createdUser = await usersManager.CreateOne(req.body)
        res.redirect(`/home/${createdUser._id}`)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router