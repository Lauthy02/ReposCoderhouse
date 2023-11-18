//aca es donde se maneja todo lo de sign up y login
import { Router } from "express"
import passport from "passport"
import { compareData, hashData } from "../utils.js"
import usersManager from "../managers/users.manager.js"
import { generateToken } from "../utils.js"
const router = Router()

//#region login y signup a mano
router.post("/login", async (req, res) => {
    const { password, email } = req.body
    try {
        const userDb = await usersManager.FindByEmail(email)
        if (!userDb) {
            return res.status(401).json({ message: "Email or password not match" })
        }
        const isValid = await compareData(password, userDb.password)
        if (!isValid) {
            return res.status(401).json({ message: "Email or password not match" })
        }
        const token = generateToken({
            email,
            firts_name: userDb.first_name,
            role: userDb.role
        })
        res.status(200).cookie("token",token,{httpOnly:true}).json({ message: `welcome ${userDb.first_name}`, token })
        //res.redirect("/products")
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/signup", async (req, res) => {
    const { password, email, first_name, last_name } = req.body
    if (!password || !email || !first_name || !last_name) {
        return res.status(400).json({ message: "missing fields" })
    }
    try {
        const userDb = await usersManager.FindByEmail(email)
        if (userDb) {
            return res.status(400).json({ message: "email already exists" })
        }
        const hashedPassword = await hashData(password)
        const createdUser = await usersManager.CreateOne({ ...req.body, password: hashedPassword })
        res.status(200).json({ message: "user created", createdUser })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/logout", async (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login")
    })
})
//#endregion

//#region login y signup con passport
//Cuando ya tengo creado el login y el signup con passport, tengo q eliminar el login y signup manual
// router.post("/login", passport.authenticate("login", {successRedirect: "/home", failureRedirect: "/error"}))
// router.post("/signup", passport.authenticate("signup", {successRedirect: "/home", failureRedirect: "/error"}))
//#endregion

//#region login y signup con github
router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }))
router.get("/github", passport.authenticate("github", { failureRedirect: "/error", }), (req, res) => {
    req.session.user = req.user
    res.redirect("/home")
})
//#endregion

export default router