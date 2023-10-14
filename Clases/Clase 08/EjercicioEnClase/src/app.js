import express from "express"
import { __dirname } from "./utils.js"
import handlebars from "express-handlebars"
import "./database/config.database.js"

const port = 8080
const app = express()

app.use(express.json)
app.use(express.urlencoded({ extended: true }))

//Handlebars
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")


//Routes
app.get("/", async (req, res) => {
    const students = await studentsManager.findAll()
    res.json({ message: "Students", students })
})

app.get("/:idStudent", async (req, res) => {
    const { idStudent } = req.params
    const student = await studentsManager.findById(idStudent)
    res.json({ message: "Student", student })
})

app.post("/", async (req, res) => {
    const createdStudent = await studentsManager.Create(req.body)
    res.json({ message: "Student created", createdStudent })
})

app.delete("/:idStudent", async (req, res) => {
    const { idStudent } = req.params
    const deletedStudent = await studentsManager.Delete(idStudent)
    res.json({ message: "Student deleted", deletedStudent })
})

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
})