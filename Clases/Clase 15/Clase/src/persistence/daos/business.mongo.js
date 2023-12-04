import { businessModel } from "../models/business.model.js"
import { BasicMongo } from "./basic.mongo.js"

class BusinessMongo extends BasicMongo{
    constructor() {
        super(businessModel)
    }

    async addProduct(id, product) {
        const business = await businessModel.findById(id)
        business.products.push(product)
        await business.save()
    }
}

export const BusinessMongo = new BusinessMongo()