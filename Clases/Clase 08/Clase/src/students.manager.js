import studentsModel from "./database/models/students.model.js"

class StudentsManager {

    async findAll() {
        const response = await studentsModel.find({}).toArray()
        return response
    }

    async findById(id) {
        const response = await studentsModel.findById(id)
        return response
    }

    async Create(obj) {
        const response = await studentsModel.create(obj)
        console.log("Pase por el manager")
        return response
    }

    async Update(id, obj) {
        const response = await studentsModel.updateOne({ _id: id }, { obj })
        return response
    }

    async Delete(id) {
        const response = await studentsModel.deleteOne({ _id: id })
        //const response = await studentsModel.findByIdAndDelete(id)
        return response
    }
}

export const studentsManager = new StudentsManager()