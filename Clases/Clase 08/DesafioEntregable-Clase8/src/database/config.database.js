import mongoose from "mongoose"

const uri = "mongodb+srv://lautarorojas02:cBDGJeojRgP3XWMJ@cluster0.s9xtjpd.mongodb.net/ecommerce?retryWrites=true&w=majority"

mongoose.connect(uri)
    .then(() => console.log("Conectado a la BD"))
    .catch(err => console.log(err))