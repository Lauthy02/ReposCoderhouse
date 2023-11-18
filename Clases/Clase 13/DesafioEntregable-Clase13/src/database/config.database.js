import config from "../config.js"
import mongoose from "mongoose"

const mongoUri = config.mogo_uri

mongoose.connect(mongoUri)
    .then(() => console.log("Connected to the database"))
    .catch(err => console.log(err))