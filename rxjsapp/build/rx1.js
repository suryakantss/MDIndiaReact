"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
let stream = (0, rxjs_1.of)(10, 20, 30, 40, 50);
stream.subscribe((data) => console.log(data));
console.log("=================");
stream.pipe((0, rxjs_1.filter)((d) => d > 20)).subscribe((n) => console.log(n));
console.log("=================");
stream.pipe((0, rxjs_1.map)((n) => n + 100)).subscribe(res => console.log(res));
