//Manejo de arhicovs en JS y manejador de archivos NPM
console.log("log 1");
setTimeout(() => {
    //Repite lo q está adentro desp de 5 secs
    console.log("log 2");
}, 5000) //Valor en milisegundos
console.log("log 3");

setInterval(() => {
    //se ejecuta cada x tiempo
}, interval);

// ----- FilseSystem -----
//Atajo piola req
//Importar el modulo: const fs = require('fs'); es lo mismo q import fs from "fs"
const fs = require('fs');

// --- Escribir un archivo --- 
//Los metodos q tienen Sync son sincrónicos
//fs.writeFileSync(ruta,data)
const ruta = "C:\Users\Lauta\OneDrive\Documentos\Cursos\Coderhouse - Programación Backend\ReposCoderhouse\Clases\Clase 04 y clase 05\archivo.txt"
fs.writeFileSync(ruta,"primer archivo")
//Si no hay archivo lo crea, pero si si hay archivo lo sobreseribe

// --- Escribir un archivo --- 
//fs.readFileSync(ruta,encoding)
//Si no le paso el encoding es null, entonces lo lee distinto
const infoArchivo1 = fs.readFileSync("archivo.txt")
console.log(infoArchivo1);
const infoArchivo2 = fs.readFileSync("archivo.txt","utf-8")
console.log(infoArchivo2);

// --- Eliminar un archivo --- 
//fs.unlinkSync(ruta)
//Elimina un archivo completo
fs.unlinkSync("archivo.txt")

// --- Para ver si existe un archivo --- 
//fs.existsSync(ruta), esto devuelve un bool
const existeArchivo = fs.existsSync("archivo.txt")

// --- Adicionar info a un archivo --- 
//fs.appendFileSync(ruta,data)
fs.appendFileSync("archivo.txt","holaa")

// ----- FileSystem asíncrono con callbacks -----
//Los asíncronos se puede manejar con callbacks o con promesas
//Con callbacks, como tercer parametro le digo que hacer al terminar la operacion
// --- Escribir un archivo asíncrono con callbacks --- 
fs.writeFile("archivo.txt","holaa",(error)=>{
    if (error) {
        console.log("error");
    } else {
        console.log("archivo creado con éxito");
    }
})
// --- Leer un archivo asíncrono con callbacks --- 
fs.readFile("archivo.txt","utf-8",(error,info)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(info);
    }
})
// --- Eliminar un archivo asíncrono con callbacks --- 
fs.unlink("archivo.txt",(error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log("archivo eliminado con éxito");
    }
})
// --- Existe un archivo solo exixte de forma sincrónica ---

// ----- FileSystem asíncrono con promesas -----
//Lo q tengo q hacer es agregar el promises
// --- Escribir un archivo asíncrono con promesas ---
fs.promises.writeFile("archivo.txt","Holaa") 
.then(()=>console.log("archivo creado"))
.catch(error=>console.log(error))
// --- Leer un archivo asíncrono con promesas --- 
fs.promises.readFile("archivo.txt","utf-8")
.then((info)=>console.log(info))
.catch(error=>console.log(error))
// --- Eliminar un archivo asíncrono con promesas --- 
fs.promises.unlink("archivo.txt")
.then(()=>console.log("archivo eliminado"))
.catch(error=>console.log(error))
//----------------------------------------------------

const productos = [
    {
        nombre:"Moto",
        precio: 100,
        stock: 30
    },
    {
        nombre:"Samsung",
        precio: 100,
        stock: 30
    },
    {
        nombre:"TV",
        precio: 100,
        stock: 30
    },
    {
        nombre:"ASUS",
        precio: 100,
        stock: 30
    }
]
//No puedo directamente guardar este tipo de datos
//Entonces la parseo a al formato q necesito
//fs.promises.writeFile("productos.json",productos) no anda
fs.promises.writeFile("productos.json",JSON.stringify(productos))
.then(()=>console.log("archivo creado"))
.catch(error=>console.log(error))
//Para leer necesito el proceso inverso
fs.promises.readFile("productos.json","utf-8") 
//.then((info)=>console.log(info)) Me lo trae como texto plano entonces no me sirve
.then((info)=>console.log(JSON.parse(info))) //Aca me trae el array de objetos
.catch(error=>console.log(error))

//JSON es un tipo de dato con la facilidad de desconverir y converir el contenido

