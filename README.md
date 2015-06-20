# nick
## The smallest templating engine ever.

`nick` is a no-nonsense string templating engine written in 11 lines.

A browser build is available [here](https://raw.githubusercontent.com/edge/nick/master/lib/nick.js). It is available globally as `Nick`.

## Installation

`$ npm i nick`

## Usage

```js
var nick = require('nick');

// Create a reusable template function
var resume = nick('My name is { name }, and I am a { job } working at { company }. I have { years } years of experience in the field of { field }.');

var me = resume({
	name: 'Haskell Curry',
	job: 'logician',
	company: 'λ Combinator',
	years: 100,
	field: 'combinatory logic'
});

// My name is Haskell Curry, and I am a logician working at λ Combinator. I have 100 years of experience in the field of combinatory logic.
```
