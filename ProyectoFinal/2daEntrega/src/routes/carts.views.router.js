import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.render("carts")
})

router.get("/crud", (req, res) => {
    res.render("cartsCRUD")
})

export default router