"use strict";
function add(a, b) {
    return a + b;
}
function addAsync(a, b) {
    let pr = new Promise((resolve, reject) => {
        resolve(a + b);
    });
    return pr;
}
console.log(add(10, 20));
console.log("===========================");
addAsync(10, 20).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
