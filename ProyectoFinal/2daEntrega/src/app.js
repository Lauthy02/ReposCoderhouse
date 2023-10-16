import express from 'express'
import { Server } from 'socket.io'
import handlebars from 'express-handlebars'

import "./database/config.database.js"
import { __dirname } from './utils.js'
import viewsRouter from './routes/views.router.js'
import productsManager from './managers/products.manager.js'
import cartsManager from "./managers/carts.manager.js"

const port = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use("/",viewsRouter)
//app.use("/api/products",productsRouter)

const httpServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`)
    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`)
    })

    socket.on('EventClientProducts:NewProduct', async (product) => {
        await productsManager.CreateOne(product)
        console.log(product);
        const all = productsManager.FindAll()
        console.log(all);
        //Me quedé acá, tengo q hacer que lea de la bd y lo ponga en la grilla
        socket.emit('EventServer:PorductCreated',all)
    })
})