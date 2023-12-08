import {productsMongo} from "../persistence/daos/products.mongo.js"

export const Service_findAll = () => {
    const products = productsMongo.getAll()
    return products
}

export const Service_findById = (id) => {
    const product = productsMongo.getById(id)
    return product
}

export const Service_create = (obj) => {
    const response = productsMongo.createOne(obj)
    return response
}

export const Service_update = (id, obj) => {
    const response = productsMongo.updateById(id, obj)
    return response
}

export const Service_delete = (id) => {
    const response = productsMongo.deleteById(id)
    return response
}