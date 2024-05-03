let tBody = document.querySelector("#t-body");


let display = async () => {
    let rsp = await productFetch();
    console.log(rsp);
    rsp.forEach((product) => {
        tBody.innerHTML +=
        `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>

        </tr>`
    });
}

display();


let form = document.getElementById("login");
let productName = document.getElementById("username");
let description = document.getElementById("description");
let price = document.getElementById("price");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let productObj = {
        "name": productName.value,
        "description": description.value,
        "price": price.value
    }

    console.log(productObj);
    addProduct(productObj)
})





