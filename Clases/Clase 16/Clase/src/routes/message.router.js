import { Router } from "express"
import {transporter} from '../nodemailer.js'

const router = Router()

router.get("/", async(req, res) => {
    const options = {
        from: "lautaro.rojas02@gmail.com",
        to: "lautarorojas02.job@gmail.com",
        cc: "lauti.roj@gmail.com",
        subject: "Test",
        text: "This is a test - First mail sent with NodeMailer",
        html: "<h1>This is a test - First mail sent with NodeMailer</h1>"
    }
    await transporter.sendMail(options)
    res.send("Message sent")
})

router.post("/", async(req, res) => {
    const {firstName, lastName, email, message} = req.body
    const options = {
        from: "lautaro.rojas02@gmail.com",
        to: email,
        subject: message,
        text: `Thank you for contacting us ${firstName} ${lastName}!`,
    }
    await transporter.sendMail(options)
    res.send("Message sent")
})

export default router