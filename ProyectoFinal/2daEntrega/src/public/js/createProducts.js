const socketClient = io()

const formInputs = document.getElementById('form-inputs')

const ftitle = document.getElementById('inputName')
const fprice = document.getElementById('inputPrice')
const fstock = document.getElementById('inputStock')
const fdescrip = document.getElementById('inputDescrip')

PonerDatos()

formInputs.onsubmit = (e) =>{
    e.preventDefault()
    const formProduct = {
        name: ftitle.value,
        price: fprice.value,
        stock: fstock.value,
        description: fdescrip.value
    }
    socketClient.emit('EventClientProducts:NewProduct',formProduct)
}

socketClient.on('EventServer:PorductCreated', a => {
    PonerDatos(a)
})

function PonerDatos(a){
    console.log(a);
    // let url = "http://localhost:8080/api/products"

    // const info = document.getElementById('data')
    
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => mostrarData(data))
    //     .catch(error => console.log(error))
    
    // const mostrarData = (data) => {
    //     const ARRAY = data.AllProducts
    //     let body = ''
    //     for (let i = 0; i < ARRAY.length; i++) {
    //         body += `<tr>
    //             <td>${ARRAY[i].ID_Product}</td>
    //             <td>${ARRAY[i].title}</td>
    //             <td>${ARRAY[i].description}</td>
    //             <td>${ARRAY[i].price}</td>
    //             <td>${ARRAY[i].thumbnail}</td>
    //             <td>${ARRAY[i].code}</td>
    //             <td>${ARRAY[i].stock}</td>
    //         </tr>`
    //     } 
    //     info.innerHTML = body
    // }
}