PutData()

function PutData(){
    let url = "http://localhost:8080/api/products/"

    const data = document.getElementById('data')
    
    fetch(url)
        .then(response => response.json())
        .then(info => showInfo(info))
        .catch(error => console.log(error))
    
    const showInfo = (info) => {
        console.log(info);
        const ARRAY = info.response //info.nombredelarray
        let body = ''
        for (let i = 0; i < ARRAY.length; i++) {
            body += `<tr>
                <td>${ARRAY[i]._id}</td>
                <td>${ARRAY[i].name}</td>
                <td>${ARRAY[i].price}</td>
                <td>${ARRAY[i].description}</td>
                <td>${ARRAY[i].stock}</td>
            </tr>`
        } 
        data.innerHTML = body
    }
}