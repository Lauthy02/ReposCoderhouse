import express from 'express'
import handlebars from 'express-handlebars'
import config from './config.js'
import messagesRouter from './routes/message.router.js'
import {__dirname} from './utils.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//handlebars
app.engine('hbs', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

//routes
app.use('/api/messages', messagesRouter)

const PORT = config.port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})