import { findAll, findById, create } from "../services/toys.service.js";

export const findToys = (req, res) => {
    const toys = findAll()
    if (!toys.lenght) {
        return res.status(404).json({ message: "No toys found" })
    }
    res.status(200).json({ message: "Toys found",toys })
}

export const findToyById = (req, res) => {
    const { id } = req.params
    const toy = findById(+id)
    if (!toy) {
        return res.status(404).json({ message: "Toy not found" })
    }
    res.status(200).json({ message: "Toy found", toy })
}

export const createToy = (req, res) => {
    const { name,price,stock } = req.body
    if (!name || !price || !stock) {
        return res.status(400).json({ message: "Missing fields" })
    }
    const newToy = create(req.body)
    res.status(201).json({ message: "Toy created", toy: newToy })
}