import { Router } from "express"
import { compareData, hashData } from "../utils.js"
import usersManager from "../managers/users.manager.js"
import cartsManager from "../managers/carts.manager.js"

const router = Router()

// Entra acá con localhost:8080/api/users

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    try {
        const users = await usersManager.FindAll()
        res.status(200).json({message: "users found", users})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Obtener un usuario por id
router.get("/:idUser", async (req, res) => {
    try {
        const { idUser } = req.params
        const user = await usersManager.FindById(idUser)
        res.status(200).json({message: "user found", user})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Obtener un usuario por email
router.get("/email/:email", async (req, res) => {
    try {
        const { email } = req.params
        const user = await usersManager.FindByEmail(email)
        res.status(200).json({message: "user found", user})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Crear un usuario
router.post("/", async (req, res) => {
    const { first_name, last_name, email, password } = req.body
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({error: "missing fields"})
    }
    try {
        const createdCart = await cartsManager.CreateOne({products: []})
        const createdUser = await usersManager.CreateOne({...req.body, cart: createdCart._id})
        res.status(200).json({message: "user created", createdUser})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

router.post("/login", async (req, res) => {
    const { password, email } = req.body
    const userDb = await usersManager.FindByEmail(email)
    if (!userDb) {
        return res.json({ error: "Email or password not match" })
    }
    const comparePassword = await compareData(password,userDb.password)
    if (!comparePassword) {
        return res.json({ error: "Email or password not match" })
    }
    req.session["email"] = email
    req.session["first_name"] = userDb.first_name
    if (email === "adminCoder@coder.com" && password === "Cod3r123") {
        req.session["rol"] = "admin"
    }
    else{
        req.session["rol"] = "user"
    }
    res.redirect("/products")

})

router.post("/signup", async (req, res) => {
    const { password } = req.body
    const hashedPassword = await hashData(password)
    const createdUser = await usersManager.CreateOne({ ...req.body, password: hashedPassword })
    res.status(200).json({ message: "user created", createdUser })
})

router.get("/logout", async (req, res) => {
    req.session.destroy(()=>{
        res.redirect("/login")
    })
})

export default router