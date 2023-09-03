/* ----- Desafío entregable Manejo de archivos -----

-- Consigna --
    Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. 
    Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia 
    de archivos (basado en entregable 1).

-- Aspectos a incluir --
    La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y 
    debe recibir la ruta a trabajar desde el momento de generar su instancia
    
    Debe guardar objetos con el siguiente formato:
        -id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
        -titulo (nombre del producto)
        -descripcion (descripción del producto)
        -precio (precio)
        -imagen (ruta de imagen)
        -codigo (código identificador)
        -stock (número de piezas disponibles)

    Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, 
    asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array 
    en el archivo).
    
    Debe tener un método getPoducts, el cual debe leer el archivo de productos y devolver todos los 
    productos en formato de arreglo.
    
    Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar 
    el producto con el id especificado y devolverlo en formato objeto
    
    Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también 
    como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el 
    producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
    
    Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que 
    tenga ese id en el archivo.
*/
const fs = require('fs')

class ProductManager {

    constructor(ruta) {
        //En lugar de utilizar this.path utilizo ruta
        this.ruta = ruta
    }

    AgregarProducto(titulo, descripcion, precio, imagen, codigo, stock) {
        if (titulo === undefined || descripcion === undefined || precio === undefined || imagen === undefined || codigo === undefined || stock === undefined) {
            console.log("Todos los parámetros son requeridos");
        } else {
            if (this.#EcontrarProductoPorCodigo(codigo)) {
                console.log("Este producto ya existe");
            } else {
                //Creo el producto
                const product = {
                    id: this.#GenerarID(),
                    titulo,
                    descripcion,
                    precio,
                    imagen,
                    codigo,
                    stock
                }
                //Guardo el producto en la "lista"
                this.products.push(product)
                console.log("Saved product");
            }
        }
    }

    ObtenerPoductos() {
        console.log(this.products);
    }

    ObtenerProductoPorID(productId) {
        if (this.#EncontrarProuctoPorID(productId)) {
            console.log(`Product ${productId} found`);
        } else {
            console.log(`Product ${productId} not found`);
        }
    }

    #EncontrarProuctoPorID(productId) {
        //Busca un elemento en la "lista" que coincida con el id que le paso
        return this.products.find(e => e.id === productId)
    }

    #EcontrarProductoPorCodigo(productcodigo) {
        return this.products.find(e => e.codigo === productcodigo)
    }

    #GenerarID() {
        let nextId
        if (this.products.length === 0) {
            nextId = 1
        } else {
            nextId = this.products[this.products.length - 1].id + 1
        }
        return nextId
    }
}

const PM = new ProductManager()