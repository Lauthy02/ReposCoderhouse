PutData()

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

on(document, "click", ".btnAddToCart", e => {
    const row = e.target.parentNode.parentNode
    const id = row.cells[0].innerHTML
    const url = `http://localhost:8080/api/carts/6533dac4ba8c26d5233b0b42/products/${id}`
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            quantity: 55
        })
    })
    .then(response => response.json())
    .then(() => location.reload())
})

function PutData(){
    let url = "http://localhost:8080/api/products/"

    const data = document.getElementById('data')
    
    fetch(url)
        .then(response => response.json())
        .then(info => mostrarInfo(info))
        .catch(error => console.log(error))
    
    const mostrarInfo = (info) => {
        console.log(info);
        const ARRAY = info.response.products //info.nombredelarray
        let body = ''
        for (let i = 0; i < ARRAY.length; i++) {
            body += `<tr>
                <td>${ARRAY[i]._id}</td>
                <td>${ARRAY[i].name}</td>
                <td>${ARRAY[i].price}</td>
                <td class="class-center"> 
                    <a href="http://localhost:8080/api/products/${ARRAY[i]._id}" class="btnDetails btn btn-primary">Details</a>
                    <a class="btnAddToCart btn btn-primary">Add to cart</a>
                 </td>
            </tr>`
        } 
        data.innerHTML = body
    }
}