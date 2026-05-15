function sumarray(arr){
    let sum = 0;
 for(let n of arr){
    sum = sum + n;
 }   
 return sum;
}

let array =[10,20,30];
console.log(sumarray(array));