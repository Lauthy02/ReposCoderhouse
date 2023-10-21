import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const cartsSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "products"
            },
            quantity: {
                type: Number
            }
        }
    ]
})

cartsSchema.plugin(mongoosePaginate)

export const cartsModel = new mongoose.model("carts", cartsSchema)