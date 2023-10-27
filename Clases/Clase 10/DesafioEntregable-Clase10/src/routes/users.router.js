import { Router } from "express"
import usersManager from "../managers/users.manager.js"
import { compareData, hashData } from "../utils.js"

const router = Router()

//mongo
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