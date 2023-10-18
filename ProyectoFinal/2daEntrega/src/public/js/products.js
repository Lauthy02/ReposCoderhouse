//const socketClient = io()

PonerDatos()

function PonerDatos(){
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
                <td>${ARRAY[i].name}</td>
                <td>${ARRAY[i].price}</td>
                <td>${ARRAY[i].description}</td>
            </tr>`
        } 
        data.innerHTML = body
    }
}