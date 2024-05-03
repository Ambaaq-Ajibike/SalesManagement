let productForm = document.querySelector(".form");
let productId = document.querySelector(".productId")
let displayFoundProduct = async () => {
    let resp = await getAProduct(productId);
    console.log(resp);
}
displayFoundProduct();

