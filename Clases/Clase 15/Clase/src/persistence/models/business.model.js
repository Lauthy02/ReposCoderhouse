import mogoose from 'mongoose'
const businessSchema = new mogoose.Schema({
    name: { 
        type: String, 
        required: true, 
    },
    products: [],
})

export const businessModel = mongoose.model("Business", businessSchema)