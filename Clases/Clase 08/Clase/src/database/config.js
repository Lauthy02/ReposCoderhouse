//Archivo de conexión a la BD
import mongoose from "mongoose";

const uri = "mongodb+srv://lautarorojas02:1YV2PU5CLrwj1pIj@clustercoderhouse.wyfq85x.mongodb.net/Clase08?retryWrites=true&w=majority"

mongoose.connect(uri)
    .then(() => {
        console.log("---- Conectado a la BD ----")
    })
    .catch((err) => {
        console.log(err)
    });
