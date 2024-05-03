let loginForm = document.querySelector("#login");
let loginUserName = document.querySelector("#username");
let loginPassword = document.querySelector("#pword");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let loginObj = {
        "userName": loginUserName.value,
        "password": loginPassword.value
    }
    console.log("entered")

    login(loginObj);
    console.log("entered")


})





