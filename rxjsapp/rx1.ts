import { filter,map,of } from "rxjs";

let stream = of(10,20,30,40,50);
stream.subscribe((data)=> console.log(data));
console.log("=================");
stream.pipe(filter((d)=> d>20)).subscribe((n)=> console.log(n));
console.log("=================");
stream.pipe(map((n)=> n+100)).subscribe(res=> console.log(res));