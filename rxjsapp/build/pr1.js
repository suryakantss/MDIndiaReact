"use strict";
function greet() {
    let pr = new Promise((resolve, reject) => {
        resolve(['Hi There!!', 'Hello World!!']);
    });
    return pr;
}
greet().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
console.log("================");
