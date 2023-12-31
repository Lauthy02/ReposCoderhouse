import passport from "passport"
import usersManager from "./managers/users.manager.js"
import { Strategy as LocalStrategy } from "passport-local"
import { Strategy as GithubStrategy } from "passport-github2"
import { ExtractJwt, Strategy as JWTStrategy} from "passport-jwt"
import { hashData, compareData } from "./utils.js"
const JWT_SECRET = "SecretKey"
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

//#region estrategia github - npm i passport-github2
passport.use("github", new GithubStrategy(
    { 
        clientID: "Iv1.52c05d24e96a4e7a", 
        clientSecret: "55e1f666f1ccff3546724f478b2e16d0e5049e97", 
        callbackURL: "http://localhost:8080/api/sessions/github" 
    }, 
    async (accessToken, refreshToken, profile, done) => {
    //console.log(profile)
    try {
        const userDb = await usersManager.FindByEmail(profile._json.email)
        //login
        if (userDb) {
            if (userDb.from_github) {
                return done(null, userDb)
            }
            else {
                return done(null, false)
            }
        }
        //signup
        const newUser = {
            first_name: profile._json.name.split(" ")[0],
            last_name: profile._json.name.split(" ")[1] || "",
            emial: profile._json.email || profile.emails[0].value,
            password: "aa",
            from_github: true
        }
        const createdUser = await usersManager.CreateOne(newUser)
        done(null, createdUser)
    } catch (error) {
        done(error)
    }
}))
//#endregion

//#region estrategia jwt - npm i ppassport-jwt
// passport.use("jwt", new JWTStrategy({secretOrKey:JWT_SECRET, jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()}, async (jwt_payload, done) => {
//     console.log("----",jwt_payload);
//     done(null, jwt_payload)
// }))
//#endregion

//#region estrategia jwt con cookies
const fromCookies = (req)=>{
    return req.cookies.token
}

passport.use("jwt", new JWTStrategy({secretOrKey:JWT_SECRET, jwtFromRequest: ExtractJwt.fromExtractors([fromCookies])}, async (jwt_payload, done) => {
    console.log("--jwt cookies--",jwt_payload);
    done(null, jwt_payload)
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