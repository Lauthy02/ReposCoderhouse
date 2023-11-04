import passport from "passport"
import usersManager from "./managers/users.manager.js"
import { Strategy as LocalStrategy } from "passport-local"
import { Strategy as GithubStrategy } from "passport-github2"
import { hashData, compareData } from "./utils.js"

//#region estrategia local - npm i passport-local
//por defecto esto resive username y password, pero mi app manda email y password
//entonces en las llaves le pongo q va a reemplzar al username (usernameField:"email")
passport.use("signup", new LocalStrategy({ usernameField: "email", passReqToCallback: true }, async (req, email, password, done) => {
    try {
        const userDb = await usersManager.FindByEmail(email)
        if (userDb) {
            return done(null, false, { message: "User already exist" })
        }
        const hashedPassword = await hashData(password)
        const createdUser = await usersManager.CreateOne({ ...req.body, password: hashedPassword })
        done(null, createdUser)
    } catch (error) {
        done(error)
    }
}))

passport.use("login", new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
        const userDb = await usersManager.FindByEmail(email)
        if (!userDb) {
            return done(null, false, { message: "Email or password not match" })
        }
        const comparePassword = await compareData(password, userDb.password)
        if (!comparePassword) {
            return done(null, false, { message: "Email or password not match" })
        }
        done(null, userDb)
    } catch (error) {
        done(error)
    }
}))
//#endregion

//#region estrategia github - npm i passport-github
passport.use("github", new GithubStrategy({ clientID: "Iv1.52c05d24e96a4e7a", clientSecret: "7bb4f0abcf40ffb4fa0a2ac86083e6edf460c047", callbackURL: "http://localhost:8080/api/users/github" }, async (accessToken, refreshToken, profile, done) => {
    try {
        const userDb = await usersManager.FindByEmail(profile.email)
        //login
        if (userDb) {
            if (userDb.from_github) {
                return done(null, userDb)
            }
            else {
                return done(null, false, { message: "You must login with your email and password" })
            }
        }
        //signup
        const newUser = {
            first_name: "aa",
            last_name: "aa",
            emial: profile.email,
            password: "aa",
            from_github: true
        }
        const createdUser = await usersManager.CreateOne(newUser)
        done(null, createdUser)
    } catch (error) {
        
    }
}))

//#endregion

passport.serializeUser(function (user, done) {
    done(null, user._id)
})

passport.deserializeUser(async function (id, done) {
    try {
        const user = await usersManager.FindById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})