let products = []
let error = ""

const productsList = document.getElementById('productslist')

async function getAllProducts() {
    try {
        console.log('--------------------------------');
        const response = await fetch("http://localhost:8080/api/products")
        const responseJson = await response.json()
        products = [...responseJson.products]
        compileProducts()
        console.log('--------------------------------');
    } catch (err) {
        error = err
    }
}

function compileProducts() {
    const productsTemplate = products.map((objProduct) => 
        `<li> <p>ID: ${objProduct.ID_Product}</p> 
            <p>Title: ${objProduct.title}</p> 
            <p>Description: ${objProduct.description}</p> 
            <p>Price: ${objProduct.price}</p> 
            <p>Code: ${objProduct.code}</p> 
            <p>Stock: ${objProduct.stock}</p>
        </li>`).join(" ")
    productsList.innerHTML = productsTemplate
}

getAllProducts();