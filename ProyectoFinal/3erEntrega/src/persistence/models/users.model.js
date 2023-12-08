import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
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
    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "carts",
    },
})

export const usersModel = mongoose.model("Users", usersSchema)