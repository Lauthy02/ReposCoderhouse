import { Router } from "express"

const router = Router()

router.get("/createproducts", (req, res) => {
    res.render("createproducts")
})

router.get("/createcarts", (req, res) => {
    res.render("createcarts")
})

router.get("/chat", (req, res) => {
    res.render("chat")
})

export default router