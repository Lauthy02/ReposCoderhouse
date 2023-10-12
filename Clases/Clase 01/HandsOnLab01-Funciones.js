/*
Definiremos la función “mostrarLista”, la cual recibirá un arreglo
con elementos como parámetro.
    ✓ Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
    ✓ Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso indicando la longitud de la lista (Utilizar template strings)
    ✓ Invocar la función con los casos de prueba.
*/

const mostrarLista = array =>{
    if (Array.isArray(array)) //Si un array es un array
    { 
        if (array.lenght <= 0) 
        {
            return 'lista vacía'
        }
        else 
        {
            array.forEach(e => console.log(e))
            return `la longitud de la lista es: ${array.lenght}`
        }    
    }
    else 
    {
        return 'No es un array'
    }
}
//Si hago un typeof de un array devuelve un object
const aux = ['Hola','Pepe','papa']
console.log(aux);
console.log(mostrarLista(aux));

