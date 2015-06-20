var Nick = module.exports = function(t) {
	var pieces = t.split(/[\{\}]/),
		head = t.charAt(0) == '{' ? '' : pieces.splice(0, 1);
	return function(o) {
		var out = head;
		for (var i = 0; i < pieces.length; i++) {
			out += (i % 2 == 0) ? o[pieces[i].trim()] : pieces[i];
		}
		return out;
	}
};
