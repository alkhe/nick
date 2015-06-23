module.exports = function(t, delimiter) {
	var pieces = t.split(delimiter || /[\{\}]/),
		head = pieces.shift();
	if (pieces[pieces.length - 1] == '') {
		pieces.pop();
	}
	for (var i = 0; i < pieces.length; i++) {
		if (i % 2 == 0) {
			pieces[i] = pieces[i].trim();
		}
	}
	return function(o) {
		if (!o) {
			o = {};
		}
		return pieces.reduce(function(prev, cur, i) {
			return prev + ((i % 2 == 0) ? o[cur] || '' : cur);
		}, head);
	}
};
