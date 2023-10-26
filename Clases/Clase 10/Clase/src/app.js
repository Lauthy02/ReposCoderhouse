import express from "express"
import cookieParser from "cookie-parser"
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'
import viewsRouter from "./routes/views.router.js"
import usersRouter from "./routes/users.router.js"
import session from "express-session"
import FileStore from "session-file-store"
import mongoStore from "connect-mongo"
import './database/config.database.js'

const port = 8080
const app = express()

const secret = "123"

app.use(cookieParser(secret)) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

//session file
const fileStore = FileStore(session)
app.use(session({
    secret: "sessionSecretKey",
    cookie:{
        maxAge: 60*60*1000,
    },
    store: new fileStore({
        path: __dirname + "/sessions"
    })
}))

//session mongo
app.use(session({
    secret: "sessionSecretKey",
    cookie:{
        maxAge: 60*60*1000,
    },
    store: new mongoStore({
        mongoUrl: "mongodb+srv://lautarorojas02:cBDGJeojRgP3XWMJ@cluster0.s9xtjpd.mongodb.net/testSession?retryWrites=true&w=majority",
    })
}))

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//routes
app.use("/",viewsRouter)
app.use("/api/users",usersRouter)

const httpServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})