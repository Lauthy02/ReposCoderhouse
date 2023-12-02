import { toysManager } from "../persistencia/toys.manager.js";

export const findAll = () => {
    const toys = toysManager.findAll()
    return toys
}

export const findById = (id) => {
    const toy = toysManager.findById(id)
    return toy
}

export const create = (toy) => {
    const newToy = toysManager.create(toy)
    return newToy
}