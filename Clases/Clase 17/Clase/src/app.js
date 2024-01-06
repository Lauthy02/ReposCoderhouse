import express from "express"
import compression from "express-compression"
import { errorMiddleware } from "./errors/error.middleware.js"
import NotFoudError from "./errors/not-foud.error.js"
//import CustomeError from "./errors/not-foud.error.js"
import { ErrorMessages } from "./errors/error.enum.js"

const app = express()
//app.use(compression())
app.use(compression({brotli: {enabled: true, zlib: {}}}))

app.get("/test", (req, res) => {
    let testString = "Probando compression con este string"
    for (let index = 0; index < 10000; index++) {
        testString += "Probando compression con este string"
    } 
    res.send(testString)
})

app.get("/users", (req, res) => {
    //throw new Error("User not found")
    //NotFoudError.CreateError("User")
    //CustomeError.CreateError(ErrorMessages.USER_NOT_FOUND)
    throw new NotFoudError("User")
})

app.get("/products", (req, res) => {
    //throw new Error("Product not found")
    //NotFoudError.CreateError("Product")
    //CustomeError.CreateError(ErrorMessages.PRODUCT_NOT_FOUND)
    throw new NotFoudError("Product")
})

app.use(errorMiddleware) //Este middleware se ejecuta cuando se produce un error y debe estar debajo de los app.get
app.listen(8080, () => {
    console.log("Server running on port 8080")
})    