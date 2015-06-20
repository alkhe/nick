module.exports = function(t) {
	var pieces = t.split(/[\{\}]/),
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
		var out = head;
		for (var i = 0; i < pieces.length; i++) {
			out += (i % 2 == 0) ? o[pieces[i]] : pieces[i];
		}
		return out;
	}
};
