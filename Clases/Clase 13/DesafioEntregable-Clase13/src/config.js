import dotenv from 'dotenv'
import program from './commander.js'

const mode = program.opts().mode
dotenv.config({
    path:
        mode === "dev" ? ".env.development" : mode === "test" ? ".env.testing" : ".env.production"
})

const objEnv = {
    mogo_uri: process.env.MONGO_URI,
    session_secret: process.env.SESSION_SECRET,
    port: process.env.PORT,
    google_client_id: process.env.GOOGLE_CLIENT_ID,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
    google_callback_url: process.env.GOOGLE_CALLBACK_URL,
}

export default objEnv