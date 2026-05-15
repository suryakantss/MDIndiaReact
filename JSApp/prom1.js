function add(a, b) {
    let prom = new Promise(function (resolve, reject) {
        if (a < 0 || b < 0)
            reject('Invalid Nos.' + a + "," + b);
        else
            resolve(a + b);
    });
    return prom;
}
add(-10, 20).then(function (res) {
    console.log(res)
}).catch(function (err) {
    console.log(err);
});
console.log("========================");