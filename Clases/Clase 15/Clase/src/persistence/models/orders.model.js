import mogoose from 'mongoose'
const ordersSchema = new mogoose.Schema({
    business: {
        type: mogoose.SchemaTypes.ObjectId,
        ref: 'Business',
    },
    user: {
        type: mogoose.SchemaTypes.ObjectId,
        ref: 'Users',
    },
    products: [],
    price: {
        type: Number,
    },
})

export const ordersModel = mongoose.model("Orders", ordersSchema)