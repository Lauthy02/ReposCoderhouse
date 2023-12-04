import { businessMongo } from '../persistence/daos/business.mongo.js';

class BusinessService {
    async finAll() {
        const response = await businessMongo.getAll();
        return response
    }

    async finById(id) {
        const response = await businessMongo.getById(id);
        return response
    }

    async creOne(business) {
        const response = await businessMongo.createOne(business);
        return response
    }

    async updById(entity) {
        const { id, ...business } = entity;
        const respone = await businessMongo.updateById(id, business);
        return response
    }

    async delById(id) {
        const response = await businessMongo.deleteById(id);
        return response
    }

    async adProduct(entity) {
        const { id, ...product } = entity;
        const response = await businessMongo.addProduct(id, product);
        return response
    }
}

export const businessService = new BusinessService()