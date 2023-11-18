import { dirname } from 'path'
import { fileURLToPath } from 'url'
import bcrypt from "bcrypt" //para hashear contraseñas
//import jwt from "jsonwebtoken" //para generar tokens

export const __dirname = dirname(fileURLToPath(import.meta.url))

export const hashData = async (data) => {
    const hash = await bcrypt.hash(data, 10)
    return hash
}

export const compareData = async (data, hashData) => {
    return bcrypt.compare(data, hashData)
}

const JWT_SECRET = "SecretKey"
export const generateToken = (user) => {
    const token = jwt.sign(user,JWT_SECRET,{expiresIn: 300})
    return token
}