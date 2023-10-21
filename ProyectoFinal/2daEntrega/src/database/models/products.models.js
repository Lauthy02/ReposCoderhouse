import {Schema, model} from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

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

productsSchema.plugin(mongoosePaginate)

export const productsModel = new model("products", productsSchema)