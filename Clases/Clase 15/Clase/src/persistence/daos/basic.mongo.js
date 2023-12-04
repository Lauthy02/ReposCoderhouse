export class BasicMongo {
    constructor(model) {
        this.model = model
    }

    async getAll(){
        return this.model.find({})
    }

    async getById(id){
        return this.model.findById(id)
    }

    async createOne(entity){
        return this.model.create(entity)
    }

    async updateById(id, entity){
        return this.model.findByIdAndUpdate(id, entity, {new: true})
    }

    async deleteById(id){
        return this.model.findByIdAndDelete(id)
    }
}