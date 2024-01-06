// export default class NotFoudError{
//     static CreateError(entity){
//         const error = new Error(`${entity} not found`)
//         error.name = "NotFoundError"
//         throw error
//     }
// }

export default class NotFoudError extends Error{
    constructor(entity){
        super(`${entity} not found`)
        this.name = "NotFoundError"
    }
}

// export default class CustomeError{
//     static CreateError(message){
//         const error = new Error(message)
//         throw error
//     }
// }