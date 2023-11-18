import { Router } from "express";
import usersManager from "../managers/users.manager.js";
import productsManager from "../managers/products.manager.js";

const router = Router()

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/products", (req, res) => {
    const { email, first_name } = req.session
    res.render("products", { email, first_name })
})

router.get("/home/:idUser", async (req, res) => {
    const {idUser} = req.params
    const userInfo = await usersManager.FindById(idUser)
    const { email, first_name, last_name} = userInfo
    const products = await productsManager.FindAll()
    res.render("home", { email, first_name, last_name, products })
})

router.get("/profile", (req, res) => {
    res.render("profile")
})

router.get("/current", (req, res) => {
    //console.log(req)
    res.render("current", { email: req.user.email, first_name: req.user.first_name, last_name: req.user.last_name })
})

export default router