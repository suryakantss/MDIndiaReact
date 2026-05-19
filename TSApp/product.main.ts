import { ProductService } from "./product.service";

let ps: ProductService = new ProductService();

let res = ps.getAllProducts();

res.forEach((p) => {
    console.log(p.id + "," + p.name + "," + p.price);
});
console.log("===============");

console.log(ps.getProduct('P2'));