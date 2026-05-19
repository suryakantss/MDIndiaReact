"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    products = [
        { id: 'P1', name: 'Mouse', price: 500 },
        { id: 'P2', name: 'Pen', price: 100 },
    ];
    getAllProducts() {
        return this.products;
    }
    getProduct(id) {
        return this.products.filter((p) => p.id == id)[0];
    }
}
exports.ProductService = ProductService;
