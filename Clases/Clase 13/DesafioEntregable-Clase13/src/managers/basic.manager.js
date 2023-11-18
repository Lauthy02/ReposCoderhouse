export default class BasicManager{
    constructor(model,populateOption){
        this.model = model;
        this.populateOption = populateOption;
    }

    async FindAll() {
        return this.model.find().populate(this.populateOption)
    }

    async FindById(id) {
        return this.model.findById(id).populate(this.populateOption)
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