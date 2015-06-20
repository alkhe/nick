var nick = require('.');

var temp = nick('Hello, my name is { name } and I am { age } years old.');

console.log(temp({ name: 'Nick', age: '17' }));
console.assert(temp({ name: 'Nick', age: '17' }) == 'Hello, my name is Nick and I am 17 years old.');
