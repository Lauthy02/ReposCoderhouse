//#region Imports
import express from 'express'
import handlebars from 'express-handlebars'
import productsRouter from './routes/products.router.js'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'
import { Server } from 'socket.io'
import { productManager } from './managers/porducts.manager.js'
//#endregion

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//#region Routes
app.use('/api/products', productsRouter)
app.use('/', viewsRouter)
//#endregion

const port = 8080
const httpServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`)
    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`)
    })

    socket.on('EventClient:NewProduct', async (product) => {
        console.log(product);
        await productManager.CreateProduct(product)
        socket.emit('EventServer:PorductCreated')
    })
})