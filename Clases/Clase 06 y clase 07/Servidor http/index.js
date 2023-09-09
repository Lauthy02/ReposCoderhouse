//Modulo nativo http de node para hacer servidores
const http = require('http')

//instancio un servidor
const server = http.createServer()

//Voy a setear un puerto para que escuche
//puerto, callback (q hacer si el servidor está escuchando este puerto)
//En desarrollo local el número del puerto no importa, en caso de desplegar el servidos nos van a asignar un puerto
server.listen(8080,() =>{
    console.log('Escuchando puerto 8080');
})
//Todas las peticiones para ESTE servidor tienen q ser en el puerto 8080


//En la realidad no se utiliza el modulo http de node, se utiliza el framework ExpressJs