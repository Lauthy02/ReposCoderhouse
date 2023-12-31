import express from "express"
import usersRouter from "./routes/users.router.js"
import toysRouter from "./routes/toys.router.js"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes
app.get("/home", (req, res) => {
    res.json({message :"Welcome to the home page"})
})

app.use("/api/users", usersRouter)
app.use("/api/toys", toysRouter)

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})