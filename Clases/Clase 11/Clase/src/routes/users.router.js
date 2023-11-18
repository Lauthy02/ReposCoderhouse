import { Router } from "express"
import usersManager from "../managers/users.manager.js"
import { compareData, hashData } from "../utils.js"
import passport from "passport"
import { jwtValidation } from "../middlewares/jwt.middleware.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

// router.get("/:idUser", jwtValidation, authMiddleware("admin"), async (req, res) => {
//     try {
//         const { idUser } = req.params
//         const user = await usersManager.FindById(idUser)
//         res.status(200).json({ message: "user found", user })
//     } catch (error) {
//         res.status(500).json({error})
//     }
// })

//JWT
router.get("/:idUser", passport.authenticate("jwt",{session: false}), async (req, res) => {
    try {
        const { idUser } = req.params
        const user = await usersManager.FindById(idUser)
        res.status(200).json({ message: "user found", user })
    } catch (error) {
        res.status(500).json({error})
    }
})

export default router