class Product {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

let productList = [];

function displayProduct() {
    var content = " ";
    for (let i = 0; i < productList.length; i++) {
        content += `
        <tr>
            <th scope="row">${productList[i].name}</th>
            <th style="color: sandybrown">Edit</th>
            <th><button type="button" class="btn btn-danger">Delete</button></th>
        </tr>
        `
    }
    document.getElementById("content").innerHTML = content;
}

function addProduct() {
    let nameProduct = document.getElementById("nameproduct").value;
    let product = new Product(nameProduct);
    productList.push(product);
    displayProduct();
}

function deleteleProduct() {



}


