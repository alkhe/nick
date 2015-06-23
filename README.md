# nick
## The smallest templating engine ever.

`nick` is a no-nonsense string templating engine written in 10 lines (plus 3 lines of optimization).

A browser build is available [here](https://raw.githubusercontent.com/edge/nick/master/lib/nick.js). It is available globally as `Nick`.

## Installation

`$ npm i nick`

## Usage

### API

`nick(templateString, [delimiterRegex])`

### Basic

Anything inside a pair of delimiters will be a simple object access.

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

### Custom Delimiters

`nick` also takes a regular expression as an optional second argument, which defines what delimiter is used for the template.

```js
var thing = nick('I like to do {{{{{adjective}}}}} things.', /[\{\}]{5}/);

var result = thing({ adjective: 'random' });

// I like to do random things.
```

## Benchmarks

```
nick x 13,253,638 ops/sec ±0.88% (96 runs sampled)
lodash x 510,826 ops/sec ±0.23% (101 runs sampled)
doT x 12,309,561 ops/sec ±0.82% (98 runs sampled)
Handlebars x 2,196,357 ops/sec ±0.44% (99 runs sampled)
```

<div id="chartdiv" style="width: 100%; height: 400px; background-color: #FFFFFF;"></div>
<script type="text/javascript" src="http://cdn.amcharts.com/lib/3/amcharts.js"></script>
<script type="text/javascript" src="http://www.amcharts.com/lib/3/serial.js"></script>
<script type="text/javascript">
	AmCharts.makeChart("chartdiv",
		{
			"type": "serial",
			"categoryField": "category",
			"startDuration": 1,
			"categoryAxis": {
				"gridPosition": "start"
			},
			"trendLines": [],
			"graphs": [
				{
					"colorField": "color",
					"fillAlphas": 1,
					"id": "AmGraph-1",
					"lineColorField": "color",
					"title": "graph 1",
					"type": "column",
					"valueField": "column-1"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"title": "Performance (ops/sec)"
				}
			],
			"allLabels": [],
			"balloon": {},
			"titles": [
				{
					"id": "Title-1",
					"size": 15,
					"text": "node.js (v0.12.5)"
				}
			],
			"dataProvider": [
				{
					"category": "nick",
					"column-1": "13253638"
				},
				{
					"category": "Lodash",
					"column-1": "510826"
				},
				{
					"category": "doT",
					"column-1": "12309561"
				},
				{
					"category": "Handlebars",
					"column-1": "2196357"
				}
			]
		}
	);
</script>
