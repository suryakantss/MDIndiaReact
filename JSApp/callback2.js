function sq(n, cb) {
    let r = n * n;
    setTimeout(function () {
        cb(r);
    }, 3000);
  
}



sq(20, function (res) {
    console.log(res);
});

console.log("============");
console.log("============");
