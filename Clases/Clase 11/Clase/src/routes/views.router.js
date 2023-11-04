import { Router } from "express";
const router = Router()

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/home", (req, res) => {
    console.log(req);
    res.render("home", { first_name: req.user.first_name })
})

router.get("/error", (req, res) => {
    res.render("error")
})
// router.get("/products", (req, res) => {
//     const { email, first_name } = req.session
//     res.render("products", { email, first_name })
// })
export default router