const _ = require('lodash');

let res = _.chunk([10, 20, 30, 40], 2); // => [['a', 'b'], ['c', 'd']]
console.log(res);

console.log(_.uniq([2,1,2,5,5,7,8,9]));

const users = [{ 'user': 'fred', 'age': 48 }, { 'user': 'barney', 'age': 36 }];

console.log(_.sortBy(users, ['age']))