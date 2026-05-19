"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const subject = new rxjs_1.Subject();
subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
});
subject.next(1);
subject.next(2);
// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
