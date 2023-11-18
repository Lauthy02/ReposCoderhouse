import { Schema, model } from "mongoose"

const usersSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    from_github: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["admin", "premium", "clietn"],
        default: "client",
    },
})

export const usersModel = new model("users", usersSchema)