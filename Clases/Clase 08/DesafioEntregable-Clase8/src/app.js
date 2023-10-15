//#region Imports
import express from 'express'
import "./database/config.database.js"
import handlebars from 'express-handlebars'
//#region Routers
import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from "./routes/carts.router.js"
//import cartsRouter from
//#endregion
import { __dirname } from './utils.js'
import { Server } from 'socket.io'
import { messageManager } from './dao/mongodb/messagemanager.mongo.js'
//#endregion

const port = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

//#region Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
//#endregion

app.use("/",viewsRouter)
app.use("/api/products",productsRouter)/
app.use("/api/carts",cartsRouter)
//#endregion

const httpServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const socketServer = new Server(httpServer)

const Rmessages = []
socketServer.on('connection', (socket) => {
    console.log(`Cliente conectado: ${socket.id}`)
    socket.on('disconnect', () => {
        console.log(`Cliente desconectado: ${socket.id}`)
    })
    socket.on('event_NewUser', (user) => {
        socket.broadcast.emit('event_NewUserBroadcast', user)
    })
    socket.on('event_Message', (info) => {
        Rmessages.push(info)
        messageManager.CreateOne(info)
        socketServer.emit('chat', Rmessages)
    })
})