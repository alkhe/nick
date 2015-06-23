module.exports = function(t, delimiter) {
	var pieces = t.split(delimiter || /[\{\}]/),
		head = pieces.shift();
	if (pieces[pieces.length - 1] == '') {
		pieces.pop();
	}
	var fn = 'o=o||{};return \'' + head + '\'';
	for (var i = 0; i < pieces.length; i++) {
		var piece = pieces[i];
		fn += '+' + ((i % 2) ? '\'' + piece + '\'' : '(o.' + piece.trim() + '||\'\')');
	}
	return new Function('o', fn);
};
