import express from "express"
import "./database/config.database.js"
import handlebars from "express-handlebars"
import { __dirname } from "./utils.js"
import viewsRouter from "./routes/views.router.js"
import usersRouter from "./routes/users.router.js"
import productsRouter from "./routes/products.router.js"

const port = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Handlebars
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")

//Routes
app.use("/",viewsRouter)
app.use("/api/products",productsRouter)
app.use("/api/users",usersRouter)

app.listen(port, () => {
    console.log(`---- Escuchando puerto ${port} ----`);
})