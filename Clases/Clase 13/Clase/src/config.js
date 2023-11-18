import dotenv from 'dotenv'
import program from './commander.js'

const mode = program.opts().mode
dotenv.config({
    path:
        mode === "dev" ? ".env.development" : mode === "test" ? ".env.testing" : ".env.production"
})

const objEnv = {
    mogo_uri: process.env.MONGO_URI,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET_KEY,
    github_client_id: process.env.GITHUB_CLIENT_ID,
    github_client_secret: process.env.GITHUB_CLIENT_SECRET,
}

export default objEnv