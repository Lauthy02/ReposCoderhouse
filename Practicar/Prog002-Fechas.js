//Manejo de fechas
// Obtenemos la fecha actual y la guardamos en la variable
const fecha1 = new Date();

// Asignamos la fecha 30 de Enero de 2018, a las 23h 30m 14seg
const fecha2 = new Date("2018/01/30 23:30:14");

// Obtenemos la fecha a partir de un timestamp o Tiempo UNIX
const fecha3 = new Date(872817240000);

// Creamos una fecha pasando cada uno de sus componentes numéricos*
const fecha4 = new Date(2018, 0, 30, 23, 30, 14, 0);

const fecha5 = Date.now() //Devuelve la fehca actual en formato UNIX
const fecha6 = new Date(fecha5)

console.log(fecha1);
console.log(fecha2);
console.log(fecha3);
console.log(fecha4);
console.log(fecha5);
console.log(fecha6);