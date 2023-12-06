import {dirname} from 'path'
import {fileURLToPath} from 'url'
import bcrypt from 'bcrypt'

export const __dirname = dirname(fileURLToPath(import.meta.url))

export const hashData = (data) => {
    const hash = bcrypt.hashSync(data,10)
    return hash
} 

export const compareData = async(data,hashedData) => {
    return bcrypt.compare(data,hashedData)
}