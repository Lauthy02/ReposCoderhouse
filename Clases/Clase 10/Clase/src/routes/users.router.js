import { Router } from "express"
import usersManager from "../managers/users.manager.js"

const router = Router()

//mongo
router.post("/login",async (req,res) => {
    const {password,email} = req.body
    const userDb = await usersManager.FindByEmail(email)
    if (!userDb) {
        return res.json({error: "This email does not exist"})
    }
    req.session["email"] = email
    req.session["first_name"] = userDb.first_name
    req.session["isAdmin"] = true 
    res.redirect("/home")

})

router.post("/signup", async (req,res) => {
    const createdUser = await usersManager.CreateOne(req.body)
    res.status(200).json({message:"user created",createdUser})
})
export default router