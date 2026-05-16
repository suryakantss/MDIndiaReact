function sumarray(arr) {
    let prom = new Promise((resolve, reject) => {
        let sum = 0;
        for (let n of arr) {
            sum = sum + n;
        }
        resolve(sum);
    });
    return prom;
}
let array = [10, 20, 30];
sumarray(array).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});