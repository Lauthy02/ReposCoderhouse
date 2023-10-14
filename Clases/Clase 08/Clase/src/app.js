import express from "express"
import "./database/config.js"
import { studentsManager } from "./students.manager.js"


const port = 8080
const app = express()

app.use(express.json)
app.use(express.urlencoded({ extended: true }))

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