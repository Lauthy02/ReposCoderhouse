//Dados dos valores mostrar la suma de ambos

//Números enteros random
console.log("------------- Números enteros -------------");
let numeroMin = 1
let numeroMax = 100

let numeroEntRand1 = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
let numeroEntRand2 = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;

console.log(`El primer número es: ${numeroEntRand1}`);
console.log(`El segundo número es: ${numeroEntRand2}`);
console.log(`La suma es: ${numeroEntRand1+numeroEntRand2}`);

//Números decimales random
console.log();
console.log("------------- Números decimales -------------");

let numeroDecRand1 = Math.random() * (numeroMax - numeroMin) + numeroMin;
let numeroDecRand2 = Math.random() * (numeroMax - numeroMin) + numeroMin;

console.log(`El primer número es: ${numeroDecRand1}`);
console.log(`El segundo número es: ${numeroDecRand2}`);
console.log(`La suma es: ${numeroDecRand1+numeroDecRand2}`);