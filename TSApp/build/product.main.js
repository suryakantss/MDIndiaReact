"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
let ps = new product_service_1.ProductService();
let res = ps.getAllProducts();
res.forEach((p) => {
    console.log(p.id + "," + p.name + "," + p.price);
});
console.log("===============");
console.log(ps.getProduct('P2'));
