'use strict';

class Grid {
	isAlive(x, y) {
		return false;
	}
}

function encode(x,y) {
  return String(x) + '_' + String(y);
}

module.exports = {
	Grid: Grid,
	converter: {
		encode: encode
	}
};
