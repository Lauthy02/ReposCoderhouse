import config from './config.js'
import mongoose from 'mongoose'

const URI = config.mogo_uri

mongoose.connect(URI)
    .then(() => console.log('DB is connected'))
    .catch(err => console.log(err))