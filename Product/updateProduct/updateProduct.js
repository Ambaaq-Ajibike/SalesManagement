var BaseUrl = "https://localhost:7292/api"



let updateProduct = async (product) => {
    fetch(`${BaseUrl}/Products`, {
        method: "POST",
        body: JSON.stringify(product),
        header: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        console.log("status", resp.status);
        return resp;
    })
}


let form = document.getElementById("login");
let productName = document.getElementsByClassName("nameOfPro");
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
    updateProduct(productObj)
})