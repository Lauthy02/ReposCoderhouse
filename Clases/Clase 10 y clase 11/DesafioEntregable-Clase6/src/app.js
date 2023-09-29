import express from 'express'
import handlebars from 'express-handlebars'
import productsRouter from './routes/products.router.js'
import realtimeproductsRouter from './routes/realtimeproducts.router.js'
import { __dirname } from './utils.js'
import { Server } from 'socket.io'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/api/', productsRouter)
app.use('/api/realtimeproducts/', realtimeproductsRouter)

const port = 8080
const httpServer = app.listen(port, () => {
    console.log(`Esuchando puerto ${port}`)
})

const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
    console.log(`Cliente conectado: ${socket.id}`)
    socket.on('disconnect', () => {
        console.log(`Cliente desconectado: ${socket.id}`)
    })
})
