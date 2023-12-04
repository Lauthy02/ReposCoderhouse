import express from "express"
import config from "./config/config.js"
import "./config/database.config.js"
import usersRouter from "./routes/users.router.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.get("/home", (req, res) => {
    res.json({message :"Welcome to the home page"})
})

app.use("/api/users", usersRouter)

const PORT = config.port

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})