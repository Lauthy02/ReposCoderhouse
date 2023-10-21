PutData()

function PutData(){
    let url = "http://localhost:8080/api/carts/6533dac4ba8c26d5233b0b42"

    const data = document.getElementById('data')
    
    fetch(url)
        .then(response => response.json())
        .then(info => mostrarInfo(info))
        .catch(error => console.log(error))
    
    const mostrarInfo = (info) => {
        console.log(info);
        const ARRAY = info.Cart.products //info.nombredelarray
        console.log(ARRAY); 
        let body = ''
        for (let i = 0; i < ARRAY.length; i++) {
            body += `<tr>
                <td>${info.Cart._id}</td>
                <td>${ARRAY[i].productId._id}</td>
                <td>${ARRAY[i].productId.name}</td>
                <td>${ARRAY[i].quantity}</td>
            </tr>`
        } 
        data.innerHTML = body
    }
}