class ToysManager {
    constructor() {
        this.toys = []
    }

    findAll() {
        return this.toys
    }

    findById(id) {
        const toy = this.toys.find(toy => toy.id === id)
        return toy
    }
    
    create(toy) {
        const id = this.toys.length ? this.toys[this.toys.length - 1].id + 1 : 1
        const newToy = { id, ...toy } 
        this.toys.push(newToy)
        return newToy
    }
}

export const toysManager = new ToysManager()