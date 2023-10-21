const url = "http://localhost:8080/api/products/"
let resultados = ""
let opcion = ""

const modalProduct = new bootstrap.Modal(document.getElementById('modalProduct'))
const tbodydata = document.getElementById('data')
let formProduct = document.getElementById("formProduct")
let fname = document.getElementById("name")
let fprice = document.getElementById("price")
let fstock = document.getElementById("stock")
let fdescription = document.getElementById("description")

PutData()
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

//Procedure create
buttonCrear.addEventListener("click", () => {
    Clear()
    modalProduct.show()
    opcion = "create"
})

//Procedure delete
on(document, "click", ".btnDelete", e => {
    const row = e.target.parentNode.parentNode
    const id = row.cells[0].innerHTML
    alertify.confirm("Are you sure about that?",
        function () {
            fetch(url + id, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(() => location.reload())
            alertify.success('Ok');
        },
        function () {
            alertify.error('Cancel');
        })
})

//Procedure edit
let idp = ""
on(document, "click", ".btnEdit", e => {
    const row = e.target.parentNode.parentNode
    idp = row.cells[0].innerHTML
    const formName = row.cells[1].innerHTML
    const formPrice = row.cells[2].innerHTML
    const formStock = row.cells[3].innerHTML
    const formDescription = row.cells[4].innerHTML
    fname.value = formName
    fprice.value = formPrice
    fstock.value = formStock
    fdescription.value = formDescription
    opcion = "edit"
    modalProduct.show()
})

//Procedure for create and edit
formProduct.addEventListener("submit", (e) => {
    e.preventDefault()
    if (opcion == "create") {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fname.value,
                price: fprice.value,
                stock: fstock.value,
                description: fdescription.value
            })
        })
        .then(response => response.json())
        .then(() => location.reload())
    }
    if (opcion == "edit") {
        fetch(url + idp, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fname.value,
                price: fprice.value,
                stock: fstock.value,
                description: fdescription.value
            })
        })
        .then(response => response.json())
        .then(() => location.reload())
    }
    modalProduct.hide()
})


function PutData() {
    fetch(url)
        .then(response => response.json())
        .then(info => ShowInfo(info))
        .catch(error => console.log(error))

    const ShowInfo = (info) => {
        const ARRAY = info.products.docs
        ARRAY.forEach(prod => {
            resultados += `
                            <tr>
                                <td>${prod._id}</td>
                                <td>${prod.name}</td>
                                <td>${prod.price}</td>
                                <td>${prod.stock}</td>
                                <td>${prod.description}</td>
                                <td class="class-center">
                                    <a class="btnEdit btn btn-primary">Edit</a>
                                    <a class="btnDelete btn btn-danger">Delete</a>
                                </td>
                            </tr>
                            `
        });
        tbodydata.innerHTML = resultados
    }
}

function Clear() {
    fname.value = ""
    fprice.value = ""
    fstock.value = ""
    fdescription.value = ""
}