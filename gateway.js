var BaseUrl = "https://localhost:7292/api"
let login = async (token) => {
    await fetch(`${BaseUrl}/auth/login`, {
        method: "POST",
                header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token),
    }).then(resp => {
        console.log("status", resp.status);
        return resp;
    }).then(response => {
        console.log(response);
        localStorage.setItem("response", JSON.stringify(response));
    }).catch(error => {
        console.log(error);
    })
}


let productFetch = async () => {
    let resp = await fetch(`${BaseUrl}/Products`)
        return resp.json();

}


let getAProduct = async (id) => {
    let product = await fetch(`${BaseUrl}/Products/${id}`)
    return product.json();
}

let addProduct = async (product) => {
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


let updateProduct = async (product) => {
    fetch(`${BaseUrl}/Products`, {
        method: "PUT",
        body: JSON.stringify(product),
        header: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        console.log("status", resp.status);
        return resp;
    })
}

