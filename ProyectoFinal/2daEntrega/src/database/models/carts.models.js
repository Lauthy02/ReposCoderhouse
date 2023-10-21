import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const cartsSchema = new mongoose.Schema(
    {
        products: {
            type: [
                {
                    productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
                    quantity: Number,
                },
            ],
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

cartsSchema.plugin(mongoosePaginate)

export const cartsModel = new mongoose.model("carts", cartsSchema)