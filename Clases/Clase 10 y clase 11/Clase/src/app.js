import express from 'express'
import {engine} from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import {__dirname} from './utils.js'
import {server} from 'wuebokets'

const port = 8080;

const httpServer = app.listen(port,()=>{
    console.log(`Esuchando puerto ${port}`);
})

//websoket - server
const soketServer = new Server(httpServer)

//connection - disconnect
soketServer.on('connection',(soket)=>{
    console.log(`Cliente conectado ${soket.id}`);
    soket.on()
})