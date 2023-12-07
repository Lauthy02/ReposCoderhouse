// export const login = (user,password) => {
//     if (password === "" || password === null|| password === undefined) {
//         return "Password is empty"
//     }
//     if (user === "" || user === null|| user === undefined) {
//         return "Username is empty"
//     }
//     if (password !== "123") {
//         return "Incorrect password"
//     }
//     if (user !== "coderUser") {
//         return "Incorrect username"
//     }
//     if (user === "coderUser" && password === "123") {
//         return "Logged in"
//     }
// }

//refactorizar

export const login = (user,password) => {
    if (!password) return "Password is empty"
    if (!user) return "Username is empty"
    if (password !== "123") return "Incorrect password"
    if (user !== "coderUser") return "Incorrect username"
    return "Logged in"
}