function add(a,b,fx){
    setTimeout(function(){
    fx(a+b);
    },3000);
}

add(10,20,function (res){
    console.log(res);
});

console.log("==========")
console.log("END");
console.log("==========")

