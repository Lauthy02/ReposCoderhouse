import { Router } from "express"
import passport from "passport"

const router = Router()

// Entra acá con localhost:8080/api/sessions

// Sesion con google
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }))

router.get(
    "/auth/google/callback", 
    passport.authenticate("google", { successRedirect: "/current" }
))

export default router