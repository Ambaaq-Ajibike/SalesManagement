var BaseUrl = "https://localhost:7182/api/"
let fetchUser = () => {

}

let fetchRole = async (id) => {
    let result = await fetch(`${BaseUrl}roles/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiT2xhbml5aSBXYWRvb2QiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcxNDczNTMwMCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE4Mi8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTgyLyJ9._ckkDxMIWFWKVjXNJR1t_fC1WcV2gsrt--rJvC5dvyw`
        }
    })
    console.log(result);
    return result.json();
}

let fetchOrder = async (id) => {
    let result = await fetch(`${BaseUrl}orders/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJvbGFuaXlpd2FyaXRoQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJPbGFuaXlpIFdhcml0aCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlNhbGVzcGVyc29uIiwiZXhwIjoxNzE0NzY4MzY3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTgyLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxODIvIn0.MtWIj7zr_NacaGUPLcnuWb1zzeFbXFNEwwyyy3AhleM`
        }
    })
    console.log(result);
    return result.json();
}

let fetchAllOrders = async () => {
    let result = await fetch(`${BaseUrl}orders`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJvbGFuaXlpd2FyaXRoQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJPbGFuaXlpIFdhcml0aCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlNhbGVzcGVyc29uIiwiZXhwIjoxNzE0NzY4MzY3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTgyLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxODIvIn0.MtWIj7zr_NacaGUPLcnuWb1zzeFbXFNEwwyyy3AhleM`
        }
    })
    return result.json();
}

let createOrder = (requestObj) => {
    fetch(`${BaseUrl}orders`, {
        method: "POST",
        body: JSON.stringify(requestObj),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJvbGFuaXlpd2FyaXRoQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJPbGFuaXlpIFdhcml0aCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlNhbGVzcGVyc29uIiwiZXhwIjoxNzE0NzY4MzY3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTgyLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxODIvIn0.MtWIj7zr_NacaGUPLcnuWb1zzeFbXFNEwwyyy3AhleM`
        }
    }).then(resp => {
        console.log("status", resp.status);
        return resp.json();
    }).then(response => {
        console.log(response);
        localStorage.setItem("response", JSON.stringify(response));
    }).catch(error => {
        console.log(error);
    })
}

let updateOrder = (requestObj, id) => {
    fetch(`${BaseUrl}orders/${id}`, {
        method: "PUT",
        body: JSON.stringify(requestObj),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJvbGFuaXlpd2FyaXRoQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJPbGFuaXlpIFdhcml0aCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlNhbGVzcGVyc29uIiwiZXhwIjoxNzE0NzY4MzY3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTgyLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxODIvIn0.MtWIj7zr_NacaGUPLcnuWb1zzeFbXFNEwwyyy3AhleM`
        }
    }).then(resp => {
        console.log("status", resp.status);
        return resp.json();
    }).then(response => {
        console.log(response);
        localStorage.setItem("response", JSON.stringify(response));
    }).catch(error => {
        console.log(error);
    })
}

let deleteOrder = (id) => {
    fetch(`${BaseUrl}orders/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJvbGFuaXlpd2FyaXRoQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJPbGFuaXlpIFdhcml0aCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlNhbGVzcGVyc29uIiwiZXhwIjoxNzE0NzY4MzY3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTgyLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxODIvIn0.MtWIj7zr_NacaGUPLcnuWb1zzeFbXFNEwwyyy3AhleM`
        }
    }).then(resp => {
        console.log("status", resp.status);
        return resp.json();
    }).then(response => {
        console.log(response);
        localStorage.setItem("response", JSON.stringify(response));
    }).catch(error => {
        console.log(error);
    })
}