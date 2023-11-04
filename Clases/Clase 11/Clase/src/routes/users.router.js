import { Router } from "express"
import usersManager from "../managers/users.manager.js"
import { compareData, hashData } from "../utils.js"
import passport from "passport"

const router = Router()

//#region login y signup manual

// router.get("/:idUser", async (req, res) => {
//     try {
//         const { idUser } = req.params
//         const user = await usersManager.FindById(idUser)
//         res.status(200).json({ message: "user found", user })
//     } catch (error) {
//         res.status(400).json({ message: "user not found", error })
//     }
// })

// router.post("/login", async (req, res) => {
//     const { password, email } = req.body
//     try {
//         const userDb = await usersManager.FindByEmail(email)
//         if (!userDb) {
//             return res.status(401).json({ message: "Email or password not match" })
//         }
//         const comparePassword = await compareData(password, userDb.password)
//         if (!comparePassword) {
//             return res.status(401).json({ message: "Email or password not match" })
//         }
//         res.status(200).json({ message: `welcome ${userDb.first_name}` })
//         //res.redirect("/products")
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// router.post("/signup", async (req, res) => {
//     const { password } = req.body
//     const hashedPassword = await hashData(password)
//     const createdUser = await usersManager.CreateOne({ ...req.body, password: hashedPassword })
//     res.status(200).json({ message: "user created", createdUser })
// })

router.get("/logout", async (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login")
    })
})

//#endregion
//#region login y signup con passport
//Cuando ya tengo creado el login y el signup con passport, tengo q eliminar el login y signup manual
router.post("/login", passport.authenticate("login", {successRedirect: "/home", failureRedirect: "/error"}))
router.post("/signup", passport.authenticate("signup", {successRedirect: "/home", failureRedirect: "/error"}))
//#endregion

//#region login y signup con github
router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }))
router.get("github", passport.authenticate("github", { failureRedirect: "/error", successRedirect: "/home" }))
//#endregion
export default router