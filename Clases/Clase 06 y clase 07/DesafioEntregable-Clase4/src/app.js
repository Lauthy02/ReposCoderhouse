//Importo Express
import express from 'express'

//Creo el servidor
const app = express()

//Seteo un puerto para que escuche: localhost:8080/
app.listen(8080, () => {
    console.log('Escuchando el puerto 8080 con Express');
})

app.get('/api/',(req,res) =>{ 
    res.send('Bienvenido a mi servidor con Express')
})

app.get('/api/productos',(req,res) =>{ 
    res.json({message: 'Todos los usuarios', Usuarios})
})

app.get('/api/productos/:IdProducto',(req,res) =>{ //localhost:8080/api/productos/2
    const {IdProducto} = req.params //Todo lo q entra por req.params es string
    res.json({message: 'Usuario', Usuario})
})