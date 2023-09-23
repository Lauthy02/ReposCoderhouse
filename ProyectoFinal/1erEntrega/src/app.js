import express from 'express'
import productsRouter from './routers/products.router.js'
import cartsRouter from './routers/carts.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(8080, () => {
    console.log('Escuchando el puerto 8080 con Express');
})

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)