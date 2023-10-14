import { Router } from "express"
import { usersManager } from "../managers/users.manager.js"
import { productsManager } from "../managers/products.manager.js"

const router = Router()

router.get("/singup", (req, res) => {
    res.render("singup")
})

router.get("/createproducts", (req, res) => {
    res.render("createproducts")
})

router.get("/home/:idUser", async (req, res) => {
    const { idUser } = req.params
    const userInfo = await usersManager.FindById(idUser)
    const { first_name, last_name } = userInfo
    const products = await productsManager.FindAll()
    res.render("home", { first_name, last_name, products })
})
export default router