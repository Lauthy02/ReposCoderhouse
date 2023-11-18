import express from "express"
import mongoStore from "connect-mongo"
import session from "express-session"
import cookieParser from "cookie-parser"
import passport from "passport"
import handlebars from "express-handlebars"

import { __dirname } from './utils.js'
import viewsRouter from "./routes/views.router.js"
import usersRouter from "./routes/users.router.js"
import sessionsRouter from "./routes/session.router.js"
import './database/config.database.js'
import "./passport.js"

const port = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//session
app.use(session({
    store: new mongoStore({
        mongoUrl: "mongodb+srv://lautarorojas02:cBDGJeojRgP3XWMJ@cluster0.s9xtjpd.mongodb.net/Clase11?retryWrites=true&w=majority"
    }),
    secret: "session_key",
    cookie: {maxAge: 60000},
}))

//passport
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use("/",viewsRouter)
app.use("/api/users",usersRouter)
app.use("/api/sessions",sessionsRouter)

const httpServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})