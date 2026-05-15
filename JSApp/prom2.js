function sumarray(arr) {
    let prom = new Promise(function (resolve, reject) {
        let sum = 0;
        for (let n of arr) {
            sum = sum + n;
        }
        resolve(sum);
    });
    return prom;
}
let array = [10, 20, 30];
sumarray(array).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});