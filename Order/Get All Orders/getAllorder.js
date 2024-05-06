let tBody = document.querySelector("#t-body")
const resp = [
{
    salespersonname: "Olaniyi Wadood",
    customername: "Oluwole Jonamilk",
    totalprice: "344526",
    datecreated: "2024-05-01T12:00:00",
    description: "This order has no description"
},
{
    salespersonname: "Olaniyi Wadood",
    customername: "Oluwole Jonamilk",
    totalprice: "344526",
    datecreated: "2024-05-01T12:00:00",
    description: "This order has no description"
},
{
    salespersonname: "Olaniyi Wadood",
    customername: "Oluwole Jonamilk",
    totalprice: "344526",
    datecreated: "2024-05-01T12:00:00",
    description: "This order has no description"
},
{
    salespersonname: "Olaniyi Wadood",
    customername: "Oluwole Jonamilk",
    totalprice: "344526",
    datecreated: "2024-05-01T12:00:00",
    description: "This order has no description"
},
{
    salespersonname: "Olaniyi Wadood",
    customername: "Oluwole Jonamilk",
    totalprice: "344526",
    datecreated: "2024-05-01T12:00:00",
    description: "This order has no description"
}
]


let display = async () => {
    // let resp = await fetchAllOrders();
    // console.log(resp);
    let i = 0;
    resp.forEach((order) => {
        let rawDate = order.datecreated;
        let date = new Date(rawDate);
        tBody.innerHTML += `<tr>
        <td>
            ${++i}
        </td>
        <td>
            ${order.salespersonname}
        </td>
        <td>
            ${order.customername}
        </td>
        <td>
            ${order.totalprice.toLocaleString()}
        </td>
        <td>
            ${order.description}
        </td>
        <td>
            ${date.toLocaleString()}
        </td>
    </tr>`
    })
}

display();