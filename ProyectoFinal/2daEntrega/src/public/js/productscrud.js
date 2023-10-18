const socketClient = io()

const formInputs = document.getElementById('form-inputs')
const fname = document.getElementById('inputName')
const fprice = document.getElementById('inputPrice')
const fstock = document.getElementById('inputStock')
const fdescrip = document.getElementById('inputDescrip')

PonerDatos()

formInputs.onsubmit = (e) =>{
    e.preventDefault()
    if (!fname.value || !fprice.value || !fstock.value) {
        console.log("All data is required")
    } else {
        if (fdescrip.value === "") {
            const formProduct = {
                name: fname.value,
                price: fprice.value,
                stock: fstock.value
            }
            socketClient.emit('EventClientProducts:NewProduct',formProduct)
        }
        else{
            const formProduct = {
                name: fname.value,
                price: fprice.value,
                stock: fstock.value,
                description: fdescrip.value
            }
            socketClient.emit('EventClientProducts:NewProduct',formProduct)
        }
    }
}

socketClient.on('EventServerProducts:PorductCreated', () => {
    //console.log("Estoy en evento ProductCreated") //Este log se ve en la consola del buscador
    LimpiarElementos()
    PonerDatos()
})

function LimpiarElementos() {
    fname.value = ''
    fprice.value = ''
    fstock.value = ''
    fdescrip.value = ''
}

function PonerDatos() {
    let url = "http://localhost:8080/api/products"

    const data = document.getElementById('data')
    
    fetch(url)
        .then(response => response.json())
        .then(info => mostrarInfo(info))
        .catch(error => console.log(error))

    const mostrarInfo = (info) => {
        const ARRAY = info.products //info.nombredelarray
        let body = ''
        for (let i = 0; i < ARRAY.length; i++) {
            body += `<tr>
                <td>${ARRAY[i]._id}</td>
                <td>${ARRAY[i].name}</td>
                <td>${ARRAY[i].price}</td>
                <td>${ARRAY[i].stock}</td>
                <td>${ARRAY[i].description}</td>
            </tr>`
        } 
        data.innerHTML = body
    }
}