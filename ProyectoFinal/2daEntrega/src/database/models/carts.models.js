import {Schema, model} from "mongoose"

const cartsSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    product: {
        type: String,
        required: true
    },
})

export const cartsModel = new model("carts", cartsSchema)