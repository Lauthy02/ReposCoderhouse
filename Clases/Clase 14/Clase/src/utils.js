import bcrypt from 'bcrypt'

export const hashData = (data) => {
    const hash = bcrypt.hashSync(data,10)
    return hash
} 