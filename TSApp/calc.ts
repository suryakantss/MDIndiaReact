function add(a: number, b: number): number {
    return a + b;
}

function addAsync(a: number, b: number): Promise<number> {
    let pr: Promise<number> = new Promise((resolve, reject) => {
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