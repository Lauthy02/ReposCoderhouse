import express from 'express'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'
import { Server } from 'socket.io'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

const port = 8080
const httpServer = app.listen(port, () => {
    console.log(`Esuchando puerto ${port}`)
})

//websoket - server
const socketServer = new Server(httpServer)

//connection - disconnect
// const names = []
// socketServer.on('connection', (socket) => {
//     console.log(`Cliente conectado: ${socket.id}`)
//     socket.on('disconnect', () => {
//         console.log(`Cliente desconectado: ${socket.id}`)
//     })

//     socket.on('firstEvent_message', (info) => {
//         names.push(info)
//         console.log(`Array de nombres: ${names}`)
//         socket.emit('secondEvent', names) //Esto envía un evento a 1 cliente
//         //socketServer.emit('secondEvent',names) Esto envía un aveneto a todos los clientes conectados
//         //socket.broadcast.emit('secondEvent',names) Esto le manda un evento a todos los clientes a excepción de sí mismo
//     })
// })

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
        socketServer.emit('chat', Rmessages)
    })
})