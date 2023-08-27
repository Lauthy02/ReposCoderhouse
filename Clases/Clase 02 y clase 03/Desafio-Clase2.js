/* ----- Desafío entregable -----
    Clases con ECMAScript y ECMAScript avanzado
    
    Realizar una clase “ProductManager” que gestione un conjunto de productos.
    ProductManager
        Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío
        Métodos
            -“addProduct”: el cual agregará un producto al arreglo de productos inicial.
                Validar que no se repita el campo “code” y que todos los campos sean obligatorios
                Al agregarlo, debe crearse con un id autoincrementable
            -“getProducts”: el cual debe devolver el arreglo con todos los productos creados hasta ese momento
            -“getProductById”: el cual debe buscar en el arreglo el producto que coincida con el id
                En caso de no coincidir ningún id, mostrar en consola un error “Not found”

    Cada producto que gestione debe contar con las propiedades:
    Producto
        -title (nombre del producto)
        -description (descripción del producto)
        -price (precio)
        -thumbnail (ruta de imagen)
        -code (código identificador)
        -stock (número de piezas disponibles)

*/

class ProductManager {
    
    constructor() {
        //Instancia la "lista" de productos
        this.products = []
    }

    addProduct(title,description,price,thumbnail,code,stock){
        if (title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined  || stock === undefined) {
            console.log("All parameters are required");
        } else {
            if (this.#findProductCode(code)) {
                console.log("This product already exists");
            } else {
                //Creo el producto
                const product = {
                    id: this.#generateProductId(),
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }
                //Guardo el producto en la "lista"
                this.products.push(product)
                console.log("Saved product");
            }
        }
    }

    getProducts(){
        console.log(this.products);
    }

    getProductById(productId){
        if (this.#findProductId(productId)) {
            console.log(`Product ${productId} found`);
        } else {
            console.log(`Product ${productId} not found`);
        }
    }

    #findProductId(productId){
        //Busca un elemento en la "lista" que coincida con el id que le paso
        return this.products.find(e=>e.id === productId)
    }

    #findProductCode(productCode){
        return this.products.find(e=>e.code === productCode)
    }

    #generateProductId(){
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

PM.getProducts()
//Agregar Productos nuevos
PM.addProduct("Producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
PM.addProduct("Talco","Polvo para pies",10,"Sin imagen","AAA002")
PM.addProduct("Leche","Leche entera",15,"Sin imagen","AAA003",20)
PM.addProduct("Café","Café torrado",20,"Sin imagen","AAA004",30)
PM.addProduct("Mate cocido","Saquitos de mate cocido",25,"Sin imagen","AAA005",40)
PM.addProduct("Taza café","Contiene 150ml",30,"Sin imagen","AAA006",50)
//Agregar productos existentes
PM.addProduct("Leche","Leche entera",15,"Sin imagen","AAA003",20)
PM.addProduct("Taza café","Contiene 150ml",30,"Sin imagen","AAA006",50)
console.log();
//Obtener todos los productos
PM.getProducts()
console.log();
//Obtener productos por ID
PM.getProductById(3)
PM.getProductById(2)
PM.getProductById(4)
PM.getProductById(8)