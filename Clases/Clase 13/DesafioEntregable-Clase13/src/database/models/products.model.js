import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    price: {
        type: Number,
        required : true,
    },
    stock: {
        type: Number,
        default: 10,
    },
    description: {
        type: String,
    },
})

productsSchema.plugin(mongoosePaginate)

export const productsModel = mongoose.model('products', productsSchema)