/*
Se creará una clase que permitirá llevar cuentas individuales
según cada responsable.
    ✓ Definir clase Contador
    ✓ La clase se creará con un nombre, representando al responsable del contador.
    ✓ El contador debe inicializarse en 0
    ✓ Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
    ✓ Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
    ✓ Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
    ✓ Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
    ✓ Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
    ✓ Realizar prueba de individualidad entre las instancias.
*/

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
c1.contar()
c1.contar()
c2.getResponsable() 
c2.contar()
c1.getCuentaIndividual()
c2.getCuentaIndividual()
c1.getCuentaGlobal()