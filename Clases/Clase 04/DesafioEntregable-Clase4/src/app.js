//Importo Express
import express, { query } from 'express'
//Importo mi clase ProductManager
import { productManager } from "./class_PorductManager.js";

//Creo el servidor
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Seteo un puerto para que escuche: localhost:8080/
app.listen(8080, () => {
    console.log('Escuchando el puerto 8080 con Express');
})

//localhost:8080/api
app.get('/api/', (req, res) => {
    res.send('Bienvenido a mi servidor con Express')
})

app.get('/api/productos', async (req, res) => { //Le pongo async al req y al res porque los métodos de mi clas son asíncronos 
    const {Limite} = req.query
    try {
        const TodosLosProductos = await productManager.ObtenerPoductos()
        if (!TodosLosProductos.length) {
            res.status(200).json({ message: 'No se encontraron productos' })
        } else {
            if (Limite) { //localhost:8080/api/productos?Limite=3
                const PorductosLimite = []
                for (let a = 0; a < Limite; a++) {
                    const Producto = TodosLosProductos[a];
                    PorductosLimite.push(Producto)
                }
                res.status(200).json({ message: 'Prodcutos encontrados con limite', PorductosLimite })
            } else {
                res.status(200).json({ message: 'Prodcutos encontrados', TodosLosProductos })
            }  
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.get('/api/productos/:IdProducto', async (req, res) => {
    const { IdProducto } = req.params //Todo lo q entra por req.params es string
    try {
        const Producto = await productManager.ObtenerProductoPorID(+IdProducto) //El + es otra forma de parsear el array a int
        if (!Producto) {
            res.status(400).json({ message: 'Producto no encontrado con el ID enviado' })
        } else {
            res.status(200).json({ message: 'Producto encontrado', Producto })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.post('/api/productos', async (req, res) => {
    try {
        const NuevoProducto = await productManager.AgregarProducto(req.body)
        res.status(200).json({ message: 'Poructo creado', NuevoProducto })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}) 

app.delete('/api/productos/:IdProducto',async(req,res) => {
    const { IdProducto } = req.params
    try {
        const Respuesta = await productManager.BorrarProducto(+IdProducto)
        if (Respuesta === -1) {
            res.status(400).json({message:'Producto no encontrado con el ID enviado'})
        } else {
            res.status(200).json({message:'Producto borrado'})
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.put('/api/productos/:IdProducto',async(req,res) => {
    const {IdProducto} = req.params
    try {
        const Respuesta = await productManager.EditarProducto(+IdProducto,req.body)
        if (Respuesta === -1) {
            res.status(400).json({message:'Producto no encontrado con el ID enviado'})
        } else {
            res.status(200).json({message:'Producto editado'})
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})