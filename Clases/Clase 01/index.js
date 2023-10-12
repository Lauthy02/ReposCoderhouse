// let nombre = 'Juan' 
// let edad = 20
// let bool = true
// let array = ['a','b',10,false]

// Actividad de clase

// let nombre = 'Juan' 
// let edad = 20
// let precio = 500
// let series = ['Breaking bad','TWD']

// console.log(nombre,edad,precio,series);
// edad = edad +1
// series.push('godless')
// console.log(nombre,edad,precio,series);

// let objeto = {
//     nombre: 'Juan', 
//     edad: 20,
//     precio: 500,
//     series: ['Breaking bad','TWD'],
// }

// console.log(objeto);

// Atajo para comentar varias líneas: ctrl + k + c
// Const se puede utilizar en arrays, y poder modificar valores dentro del array, esto se llama mutabilidad
// Recomendacion: los arreglos, los objetos y las funciones tratar de definirlas con const
// const valorx = 'Pepe'
// valorx = 'Papa' //Esto explota
// const array = []
// array.push('Hola, ') //Esto si se puede hacer
// array.push('como ')
// array.push('estás?')
// console.log(array);
//Al hacer push no se reasigna el array

// //Funciones
//Sintaxis básica
// function suma(num1,num2){
//     const resultado = num1+num2
//     return resultado
// }
// console.log(suma(2,3));
//Notación flecha (Arrow function): se cambia el function por el => 
// const resta1 = (num1,num2)=>{
//     const resultado = num1-num2
//     return resultado
// }
// console.log(resta1(2,3));

//Ventaja, si mi funcion se resuelve en una linea de codigo, se pueden evitar las llaves y el return
//const resta2 = (num1,num2)=> num1-num2
//Con retorno implícito
//console.log(resta2(2,3));


// //hands on lab
// const mostrarLista = array =>{
//     if (Array.isArray(array)) { //Si un array es un array
//         if (!array.lenght) {
//             return 'lista vacía'
//         }
//         array.forEach(e => console.log(e))
//         return `la longitud de la lista es: ${array.lenght}`
//     }
//     else {
//         return 'No es un arreglo'
//     }
// }
//Si hago un typeof de un array devuelve un object

// console.log(mostrarLista([2,0,4,1,2]));

//Clases
//Las clases tienen un método default, el constructor
// class Persona{
//     //Atributos
//     constructor(nombre,apellido,edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }

//     //Métodos
//     obtenerNombre(){
//         return this.nombre
//     }
// }
// const p1 = new Persona('Max','Vers',20)
// const p2 = new Persona('Checo','Perez',27)
// console.log(p1);
// console.log(p2.obtenerNombre);

//hands on lab

class Contador{
    constructor(nombre){
        this.nombre = nombre
        this.contadorIndividual = 0
    }
    //variable estática, variable de la clase
    static contadorGlobal = 0

    //Métodos
    getResponsable(){
        console.log(this.nombre);
    }

    contar(){
        this.contadorIndividual++
        Contador.contadorGlobal++
    }

    getCuentaIndividual(){
        console.log(`Cuenta individual de ${this.nombre} es ${this.contadorIndividual}`);
    }

    getCuentaGlobal(){
        console.log(`Cuenta global es ${Contador.contadorGlobal}`);
    }
}

const c1 = new Contador('Marcelo')
const c2 = new Contador('Juan')

c1.getResponsable()
c2.getResponsable() 