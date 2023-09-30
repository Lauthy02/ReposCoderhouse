const socketClient = io()

const formInputs = document.getElementById('form-inputs')

//#region Product data
const ftitle = document.getElementById('inputTitle').value
const fdescrip = document.getElementById('inputDescrip').value
const fprice = document.getElementById('inputPrice').value
const fthumbnail = document.getElementById('inputThumbnail').value
const fcode = document.getElementById('inputCode').value
const fstock = document.getElementById('inputStock').value
//#endregion

PonerDatos()

formInputs.addEventListener('submit',e => {
    e.preventDefault()
    
    console.log(fname.value);
    console.log(fprice.value);
    
    socketClient.emit('eventClient:NewProduct', {
        title: fname.value,
        description: "",
        price: fprice.value,
        thumbnail: "Without image",
        code: "",
        stock: 777
    })
})

function PonerDatos(){
    let url = "http://localhost:8080/api/products"

    const info = document.getElementById('data')
    
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    
    const mostrarData = (data) => {
        console.log(data)
        const ARRAY = data.AllProducts
        console.log(ARRAY);
        let body = ''
        for (let i = 0; i < ARRAY.length; i++) {
            body += `<tr><td>${ARRAY[i].ID_Product}</td><td>${ARRAY[i].title}</td><td>${ARRAY[i].price}</td></tr>`
        } 
        info.innerHTML = body
    }
}