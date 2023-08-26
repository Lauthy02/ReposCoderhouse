// Crear una función promesa
function promesaFun(a,b){
    return new Promise((resolve,reject)=>{
        if (a===0||b===0) {
            reject("Promesa rechazada por ingresar algun 0")
        }
        else {
            resolve(a+b)
        }
    })
}

promesaFun(1,7)
    .then(res=>console.log(res))
    .catch(error=>console.log(error))