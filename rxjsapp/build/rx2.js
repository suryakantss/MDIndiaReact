"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function greet() {
    let ob = new rxjs_1.Observable((o) => {
        setTimeout(() => {
            o.next('Hi There!!');
            //   o.error('someting went wrong!!')
        }, 2000);
        setTimeout(() => {
            o.next('Hello World!!');
            o.complete();
        }, 4000);
    });
    return ob;
}
greet().subscribe({
    next: (msg) => {
        console.log(msg);
    },
    complete: () => {
        console.log("END!!!");
    },
    error: (err) => {
        console.log(err);
    }
});
console.log("=================");
