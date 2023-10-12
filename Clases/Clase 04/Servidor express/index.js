//Poner en consola npm i express para utilizar express. Esto se utiliza a nivel de proyecto
import express from 'express'
//Para trabajar con el import tengo q ir al .json y escribir "type": "module"

//Por constumbre la constante del servidor al utlizar express se llama app
//Creo el servidor
const app = express()

const usuarios = [
    {
        id: 1,
        nombre: "Juan"
    },
    {
        id: 2,
        nombre: "Santi"
    },
    {
        id: 3,
        nombre: "Lauta"
    },
    {
        id: 4,
        nombre: "Katia"
    }
]

//Con esto defino con q ruta va a entrar a este get
//En el buscador o postman poner: http://localhost:8080/rutadefinidaenlosget
//req es request y res es response 
app.get('/', (req, res) => { //Esta se llama ruta raíz
    console.log(req)

    res.send('Bienvenido a raíz')
})

app.get('/primera', (req, res) => {
    res.send('Bienvenido a primera')
})

app.get('/ultima', (req, res) => {
    res.send('Bienvenido a última')
})

//todos los usuarios
app.get('/raiz', (req, res) => { //Esta se llama ruta raíz
    res.json({ message: 'todos los usuarios', usuarios })
    //Q pasa si me piden usuarios ordenados o solo 1 usuario, esa info va a estar en params o en query
})

//1 usuario particular
//Con los : express sabe q le va a llegar una valor x id, esta variable entra por el req en la propiedad params
app.get('/usuarios/:id', (req, res) => { //Esta se llama ruta raíz
    console.log(req.params);
    const idu = req.params //Lo q entra por params siempre es tipo string
    const usu = usuarios.find(u => u.id === +idu) //el + es como el parse
    res.json({ message: 'Usuario x', usu })
})

//lo q nos puede llegar por query son datos de como aordenar, filtrar, solo 20...
//Con los ? express sabe q le va a llegar una query
//localhost:8080/usuarios?sort=ASC&nombre=Luis&edad=10
app.get('/usuarios', (req, res) => { //localhost:8080/usuarios o localhost:8080/usuarios?sort=ASC o localhost:8080/usuarios?nombre=Luis
    //Por la query pueden entrar parametros pero si el back no las contembla no va ahacer nada
    console.log(req.query);
    const { nombre, sort } = req.query //con esto identifico el parámetro
    if (nombre) {
        //localhost:8080/usuarios?nombre=Luis
        const usu = usuarios.find(u => nombre === nombre)
        res.json({ message: 'Usuario encontrado', usu })
    }

    const usuariosFiltrados = sort === 'ASC' ? usuarios.sort((a, b) => a.nombre.localeCompare(b.nombre)) : usuarios.sort((a, b) => b.nombre.localeCompare(a.nombre))

    res.json({ message: 'Usuarios filtrados', usuariosFiltrados })

})

//Más adelante el 8080 se reemplaza por una ruta .com
//El cliente me teiene q mandar la ruta + metodo
//entonces alguien puede llamar a la ruta primera pero si pasa un metodo q no es un get no entra
//por lo tanto puede haber para 1 ruta distintos métodos
//Cuando yo escribo una ruta en el navegado el método q se ejecuta por deafault es el get
//Por ruta no se puede llamar a otro método
//cuando un cliente manda una ruta al servido le llega un objeto con información de la petición, el req
//x ahora hay 3 propiedades del objeto req q nos interesa: params, query y body
//res es el q yo utilizo para dar respuesta
//por ejemplo si necesito madndar una lista de prductos tengo q enviar un json, entonces res.json(archivo)
//Metodos para Leer (get), modificar, eliminar


//Setear un puerto para que escuche
app.listen(8080, () => {
    console.log('Escuchando el puerto 8080 con express');
})

