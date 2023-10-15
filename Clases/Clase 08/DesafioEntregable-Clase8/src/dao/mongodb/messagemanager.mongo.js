import { messagesModel } from "../models/messages.model.js"

class MessageManager{

    async FindAll() {
        return messagesModel.find().lean()
    }

    async CreateOne(obj) {
        return messagesModel.create(obj)
    }
}

export const messageManager = new MessageManager()