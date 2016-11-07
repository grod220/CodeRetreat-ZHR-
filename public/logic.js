'use strict';

class Grid {
	isAlive(x, y) {
		return false;
	}
}

function encode(x,y) {
  return String(x) + '_' + String(y);
}

function decode(str) {
	return str.split('_').map(Number);
}

module.exports = {
	Grid: Grid,
	converter: {
		encode: encode,
		decode: decode
	}
};
