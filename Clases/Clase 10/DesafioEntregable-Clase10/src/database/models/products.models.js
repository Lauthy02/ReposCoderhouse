import {Schema, model} from "mongoose"

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        default: "Without description"
    },
})

export const productsModel = new model("products", productsSchema)