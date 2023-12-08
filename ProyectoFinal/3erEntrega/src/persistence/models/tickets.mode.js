import mongoose from 'mongoose'

const ticketsSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    purchase_datetime: {
        type: Date,
        required: true,
    },
    amount: { //total de la compra
        type: Number,
        required: true,
    },
    purchaser: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users",
    },
})

export const ticketsModel = mongoose.model("Tickets", ticketsSchema)