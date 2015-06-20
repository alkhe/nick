var nick = require('.');

var intro = nick('Hello, my name is { name } and I am { age } years old.');

console.log(intro({ name: 'Nick', age: '17' }));
console.assert(intro({ name: 'Nick', age: '17' }) == 'Hello, my name is Nick and I am 17 years old.');

console.log(nick('{s}')())
