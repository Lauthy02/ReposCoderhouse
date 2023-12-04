export class UserNotFoudError extends Error {
    constructor(id = " ") {
        super(`User with id ${id} not found`); 
    }
}

