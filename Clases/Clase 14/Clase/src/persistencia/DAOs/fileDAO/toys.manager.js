import fs from 'fs'

const path = './src/persistencia/DAOs/fileDAO/toys.json'

class ToysManager{
    
    async findAll () {
        if (fs.existsSync(path)) {
            const toys = await fs.promises.readFile(path, "utf-8")
            return JSON.parse(toys)
        }
        else {
            return []
        }
    }

    async findById(id) {
        const toys = await this.findAll()
        const toy = toys.find(toy => toy.id === id)
    }
    
    async create(toy) {
        const toys = await this.findAll()
        const id = toys.length ? toys[toys.length - 1].id + 1 : 1
        const newToy = { id, ...toy }
        toys.push(newToy)
        await fs.promises.writeFile(path, JSON.stringify(toys))
    }
}

//export const toysManager = new ToysManager()