import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required : true,
    },
    last_name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
        unique: true,
    },
    password: {
        type: String,
        required : true,
    },
    age: {
        type: Number,
    },
    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "carts",
    },
    from_google: {
        type: Boolean,
        default: false
    },
    from_github: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["admin","client"],
        default: "client",
    },
})

export const usersModel = new mongoose.model("users", usersSchema)