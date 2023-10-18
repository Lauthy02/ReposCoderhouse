import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.render("products")
})

router.get("/crud", (req, res) => {
    res.render("productsCRUD")
})

export default router