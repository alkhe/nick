var suite = new (require('benchmark').Suite),
	iter = require('./index'),
	fn = require('./functional');

var itert = iter('Hello, my name is { name } and I am { age } years old.'),
	fnt = fn('Hello, my name is { name } and I am { age } years old.');

console.assert(itert({ name: 'Nick', age: '17' }) == 'Hello, my name is Nick and I am 17 years old.');
console.assert(fnt({ name: 'Nick', age: '17' }) == 'Hello, my name is Nick and I am 17 years old.');

suite.add('iterative', function() {
	itert({ name: 'Nick', age: '17' });
}).add('functional', function() {
	fnt({ name: 'Nick', age: '17' });
}).on('cycle', function(event) {
	console.log(String(event.target));
}).on('complete', function() {
	console.log('Fastest is ' + this.filter('fastest').pluck('name'));
}).run({ async: true });

// iterative x 7,973,495 ops/sec ±0.56% (98 runs sampled)
// functional x 2,601,492 ops/sec ±0.76% (99 runs sampled)
// Fastest is iterative
