
let displayOrder = document.querySelector("#display-Order")
let display = async () => {
    let order = await fetchOrder(2);
    console.log(order);
    // let order = {
    //     salespersonname: "Olaniyi Wadood",
    //     customername: "Oluwole Jonamilk",
    //     totalprice: "$3,000,000",
    //     datecreated: "2024-05-01T12:00:00",
    //     description: "This order has no description"
    // };

    // Iterate over the items and create list items for each




    let rawDate = order.dateCreated;
    let date = new Date(rawDate);
    if (order.description == null || order.description === "")
        order.description = "This order has no description";
    displayOrder.innerHTML += `
<div class="wrapper">
    <div class="gg">
        <p class="line">Salesperson</p>
    </div>
    <div class="ff">
        <p >${order.salespersonName}</p>
    </div>
</div>
<div class="wrapper">
    <div class="gg">
        <p>Customer</p>
    </div>
    <div class="ff">
        <p>${order.customerName}</p>
    </div>
</div>
<div class="wrapper">
    <div class="gg">
        <p>Price</p>
    </div>
    <div class="ff">
        <p>${order.totalPrice}</p>
    </div>
</div>
<div class="wrapper">
    <div class="gg">
        <p>Description</p>
    </div>
    <div class="ff">
        <p>${order.description}</p>
    </div>
</div>
<div class="wrapper">
    <div class="gg">
        <p>Date Created</p>
    </div>
    <div class="ff">
        <p>${date.toLocaleString()}</p>
    </div>
</div>
    <div class="list-header">
        <h4 >Items</h4>
    </div>
<div class="list">
    <div class="container-list">
        <div class="ff">
            <ul class="itemList" id="ul">
            
            </ul>
        </div>
    </div>
</div>
`
    let ul = document.querySelector('#ul');
    order.items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="item">
            <p class="itemName">${item.productName}</p>
            <p class="itemPrice">Price: ${item.unitPrice}</p>
            <p class="itemUnits">Units: ${item.units}</p>
        </div>
    `;
        ul.appendChild(li);
    });
}

display();