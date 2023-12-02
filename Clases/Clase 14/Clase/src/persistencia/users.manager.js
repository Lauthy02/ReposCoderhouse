class UsersManager {
    constructor() {
        this.users = []
    }

    findAll() {
        return this.users
    }

    findById(id) {
        const user = this.users.find(user => user.id === id)
        return user
    }
    
    create(user) {
        const id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1
        const newUser = { id, ...user } 
        this.users.push(newUser)
        return newUser
    }
}

export const usersManager = new UsersManager()