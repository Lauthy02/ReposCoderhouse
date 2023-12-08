import dotenv from 'dotenv'

dotenv.config()

const objEnv = {
    port: process.env.PORT,
    mogo_uri: process.env.MONGO_URI,
    gmail_user: process.env.GMAIL_USER,
    gmail_pass: process.env.GMAIL_PASS,
}

export default objEnv