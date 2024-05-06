let displayRole = document.querySelector("#display-Role")
let roles = fetchRole(1);
let display = async () => {
 let role = await fetchRole(1);
console.log(role)
displayRole.innerHTML += `
<div class="wrapper">
    <div class="gg">
        <p class="line">Role Name</p>
    </div>
    <div class="ff">
        <p >${role.name}</p>
    </div>
</div>
<div class="wrapper">
    <div class="gg">
        <p>Description</p>
    </div>
    <div class="ff">
        <p>${role.description}</p>
    </div>
</div>
`}

display();