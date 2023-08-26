// ----- Lo q se introdujo en ES7 -----
const exp = Math.pow(4,3) //Elevar un número a otro
const expES7 = 4 ** 3
console.log(exp,expES7);

const array = [1,2,3,4,5,6]
//Si dentro de este arreglo existe un elemento en particular

console.log(array.includes(2),array.includes(10));



// ----- Lo q se introdujo en ES8 -----
//Otra forma de manipular promesas: Async Await

const obj = {
    nombre: "juan",
    apellid: "perez",
    edad: 21,
    estado: true
}

console.log(Object.keys(obj));
console.log();
console.log(Object.values(obj));
console.log();
console.log(Object.entries(obj));
console.log();

//De un objeto a un arreglo
const objArray = Object.entries(obj)
const objArrayMod = objArray.map(([k,v])=>[k, `${v} mod`])
console.log(objArrayMod);
console.log();
//De un arreglo a un objeto
const objMod = Object.fromEntries(objArrayMod)
console.log(objMod);



// ----- Lo q se introdujo en ES9 -----
//Spread operator
const animales1 = ["Perro",'Gato','raton','Pajaro']
const animales2 = ['Elefante','Mono','Leon','Cocodrilo']
const animalesConcat = animales1.concat(animales2)
//Para poder concatenar mejor los objetos
const animalesSpread = [...animales1,...animales2]

//Para poder hacer una copia
const animalesCopia = animalesSpread //Con esto no copio, apunto a la misma pos de memoria
animalesCopia[0] = "Caballo" 
console.log(animalesSpread);
console.log();
console.log(animalesCopia);
//Si hago esto la copia no sucede porque se me cambia el valor de los 2 array
//tanto en inicial como en la copia, porque estas 2 variables apuntan al mismo
//lugar de memoria
//Spread opeator si crea otro espacio en memoria
const animalesCopia = [...animalesSpread] //Con esto si copio
animalesCopia[0] = "Caballo" 
console.log(animalesSpread);
console.log();
console.log(animalesCopia);

//Cuando queremos expandir un objeto
const newObj = {...obj,id:1,curso:'JS',estado:false}
console.log(newObj);

//Rest operator
const funcion1 = (a,b) =>{
    console.log(a,b);
}
funcion1(1,2,3,4,5,6,7) //Cuando no se cuántos parametros me van a mandar
//etnonces cuando me pasan mas de 2 los guardo, los agrupo, en una constante
const funcion2 = (a,b,...otros) =>{
    console.log(a,b);
    console.log(otros);
}
funcion2(1,2,3,4,5,6,7)



// ----- Lo q se introdujo en ES10 -----
//String.strim(): Eliminar espacios adelante y atrás
const texto = "   hooolaaa asas  "
console.log(texto, texto.length);
console.log(texto.trim(), texto.trim().length);

//Traer las valores en una profundidad de un arreglo
const array2 = [1,2,3[4,5[7,8]]]
console.log(array2.flat);
console.log(array2.flat(2));
console.log(array2.flat(Infinity));



// ----- Lo q se introdujo en ES11 -----
const numero = 0
console.log(numero || 10);
//Operador nullish
console.log(numero ?? 10);

//Variables/atributos y metodos privados dentro de clases
//Estos se declaran con un # adelante
//Se puede ver en el HandsOnLab03
