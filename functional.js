var Nick = module.exports = function(t) {
	var pieces = t.split(/[\{\}]/),
		head = t.charAt(0) == '{' ? '' : pieces.splice(0, 1);
	return function(o) {
		return pieces.reduce(function(prev, cur, i) {
			return prev + ((i % 2 == 0) ? o[cur.trim()] : cur);
		}, head);
	}
};
