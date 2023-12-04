import { ordersMongo } from '../persistence/daos/orders.mongo.js';

class OrdersService {
    async finAll() {
        const response = await ordersMongo.getAll();
        return response
    }

    async finById(id) {
        const response = await ordersMongo.getById(id);
        return response
    }

    async creOne(order) {
        const response = await ordersMongo.createOne(order);
        return response
    }

    async updById(entity) {
        const { id, ...order } = entity;
        const respone = await ordersMongo.updateById(id, order);
        return response
    }

    async delById(id) {
        const response = await ordersMongo.deleteById(id);
        return response
    }
}

export const ordersService = new OrdersService()