function add(a, b) {
    let prom = new Promise((resolve, reject) => {
        if (a < 0 || b < 0)
            reject('Invalid Nos.' + a + "," + b);
        else
            resolve(a + b);
    });
    return prom;
}
add(-10, 20).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err);
});
console.log("========================");