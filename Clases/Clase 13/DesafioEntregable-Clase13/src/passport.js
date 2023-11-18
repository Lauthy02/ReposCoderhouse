import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import usersManager from "./managers/users.manager.js"
import cartsManager from "./managers/carts.manager.js"
import config from "./config.js"

// Estrategia con local
// passport.use("local", new LocalStrategy({
//     usernameField: "email",
//     passwordField: "password"
// }, async (email, password, done) => {
//     try {
//         const user = await usersManager.FindByEmail(email)
//         if (!user) {
//             return done(null, false, { message: "User not found" })
//         }
//         if (!user.ComparePasswords(password)) {
//             return done(null, false, { message: "Password not match" })
//         }
//         return done(null, user)
//     } catch (error) {
//         return done(error)
//     }
// }))

// Estrategia con google
passport.use("google", new GoogleStrategy(
    {
        clientID: config.google_client_id,
        clientSecret: config.google_client_secret,
        callbackURL: config.google_callback_url,
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile._json)
        try {
            const user = await usersManager.FindByEmail(profile._json.email)
            //login
            if (user) {
                if (user.from_google) {
                    return done(null, user)
                } else {
                    done(null, false, { message: "You must use google to login" })
                }
            }
            //signup
            const createdCart = await cartsManager.CreateOne({products: []})
            const infoUser = {
                first_name: profile._json.given_name,
                last_name: profile._json.family_name,
                email: profile._json.email,
                password: "12345",
                age: 18,
                cart: createdCart._id, 
                from_google: true,
                from_github: false,
                role: "client",
            }
            const createdUser = await usersManager.CreateOne(infoUser)
            done(null, createdUser)
        } catch (error) {
            done(error)
        }
        done(null, false)
    }
))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await usersManager.FindById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})