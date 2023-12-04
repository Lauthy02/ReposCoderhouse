export default class UserDTO {
    constructor(user){
        this.fullName = `${user.first.Name} ${user.lastName}`
        this.email = user.email
        this.password = user.password
    }
}