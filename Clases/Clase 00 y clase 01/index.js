//let nombre = 'Juan' 
//let edad = 20
//let bool = true
//let array = ['a','b',10,false]

// //Actividad de clase

// // let nombre = 'Juan' 
// // let edad = 20
// // let precio = 500
// // let series = ['Breaking bad','TWD']

// // console.log(nombre,edad,precio,series);
// // //edad = edad +1
// // series.push('godless')
// // console.log(nombre,edad,precio,series);

// let objeto = {
//     nombre: 'Juan', 
//     edad: 20,
//     precio: 500,
//     series: ['Breaking bad','TWD'],
// }

// console.log(objeto);
// //Const se puede utilizar en arrays, y poder modificar valores dentro del array
// //Recomendacion: los arreglos, los objetos y las funciones tratar de definirlas con const
// //Atajo para comentar varias líneas: ctrl + k + c

// //Funciones

// function suma(num1,num2){
//     const resultado = num1+num2
//     return resultado
// }
// console.log(suma(2,3));
// //Estructura flecha (Arrow function): se cambia el function por el => 
// //Ventaja, si mi funcion se resuelve en una linea de codigo, se pueden evitar las llaves y el return

// const resta = (num1,num2)=>{
//     const resultado = num1-num2
//     return resultado
// }
// //const resta = (num1,num2)=> num1-num2
// //Con retorno implícito
// console.log(resta(2,3));

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

// console.log(mostrarLista([2,0,4,1,2]));

//Clases
//Las clases tienen un metodo default, el constructor
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
// const p1 = new Persona('Juan','Perez',20)
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