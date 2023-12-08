import bcrypt from 'bcrypt'

export const hashData = (data) => {
    const hash = bcrypt.hashSync(data,10)
    return hash
} 

export const compareData = async(data,hashedData) => {
    return bcrypt.compare(data,hashedData)
}