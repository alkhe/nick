module.exports = function(t, delimiter) {
	var pieces = t.split(delimiter || /[\{\}]/),
		parity = false,
		head = pieces.shift();
	if (head === '') {
		head = pieces.shift();
		parity = true;
	}
	if (pieces[pieces.length - 1] === '') {
		pieces.pop();
	}
	var p1 = '(o.',
		p2 = '||\'\')',
		qt = '\'';
	var fn = 'o=o||{};return ' + (parity ? p1 + head.trim() + p2 : qt + head + qt);
	for (var i = 0; i < pieces.length; i++) {
		fn += '+' + ((i % 2 == parity) ? p1 + pieces[i].trim() + p2 : qt + pieces[i] + qt);
	}
	return new Function('o', fn);
};
