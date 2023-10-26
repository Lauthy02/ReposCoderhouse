import mongoose from "mongoose"

const uri = "mongodb+srv://lautarorojas02:cBDGJeojRgP3XWMJ@cluster0.s9xtjpd.mongodb.net/testSession?retryWrites=true&w=majority"

mongoose.connect(uri)
    .then(() => console.log("Connected to the database"))
    .catch(err => console.log(err))