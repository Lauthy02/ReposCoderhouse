import { Router } from "express"

const router = Router()

router.get("/products", (req, res) => {
    res.render("products")
})

router.get("/products/create", (req, res) => {
    res.render("createProducts")
})

router.get("/carts", (req, res) => {
    res.render("carts")
})

router.get("/carts/create", (req, res) => {
    res.render("createCarts")
})

export default router