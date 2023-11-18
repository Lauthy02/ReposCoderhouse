import express from "express"
import handlebars from "express-handlebars"
import cookieParser from "cookie-parser"
import MongoStore from "connect-mongo"
import session from "express-session"
import passport from "passport"

import { __dirname } from './utils.js'
import './database/config.database.js'
import './passport.js'
import config from "./config.js";

import viewsRouter from "./routes/views.router.js"
import usersRouter from "./routes/users.router.js"
import cartsRouter from "./routes/carts.router.js"
import productsRouter from "./routes/products.router.js"
import sessionsRouter from "./routes/sessions.router.js"

const port = config.port
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cookieParser())
app.use(session({
    store: new MongoStore({mongoUrl: config.mogo_uri}),
    secret: config.session_secret,
    cookie: {maxAge: 60000}
}))

//passport
app.use(passport.initialize())
app.use(passport.session())

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//routes
app.use("/",viewsRouter)
app.use("/api/users",usersRouter)
app.use("/api/carts",cartsRouter)
app.use("/api/products",productsRouter)
app.use("/api/sessions",sessionsRouter)

const httpServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})