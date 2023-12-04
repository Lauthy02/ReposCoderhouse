import mongoose from 'mongoose'
const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    orders: {
        type: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Orders',
            }
        ],
        default: [],
    },
})

export const usersModel = mongoose.model("Users", usersSchema)