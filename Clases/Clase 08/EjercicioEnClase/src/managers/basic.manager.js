export default class BasicManager{
    constructor(model){
        this.model = model
    }

    async FindAll() {
        return this.model.find().lean()
    }

    async FindById(id) {
        return this.model.findById(id)
    }

    async CreateOne(obj) {
        return this.model.create(obj)
    }

    async UpdateOne(id, obj) {
        return this.model.updateOne({ _id: id }, obj)
    }
    
    async DeleteOne(id) {
        return this.model.deleteOne({ _id: id })
    }
}