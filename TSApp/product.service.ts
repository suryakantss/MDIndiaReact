import { Product } from "./product.model";

export class ProductService {
    products: Array<Product> = [
        { id: 'P1', name: 'Mouse', price: 500 },
        { id: 'P2', name: 'Pen', price: 100 },

    ];
    public getAllProducts(): Array<Product> {
        return this.products;
    }
    public getProduct(id: string): Product | null {
        return this.products.filter((p)=>p.id==id)[0];
       
    }
}