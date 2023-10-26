import express from "express"
import cookieParser from "cookie-parser"
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'
import loginRouter from "./routes/login.router.js"
import viewsRouter from "./routes/views.router.js"

const port = 8080
const app = express()

const secret = "123"

app.use(cookieParser(secret)) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use("/login",loginRouter)
app.use("/",viewsRouter)

const httpServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})