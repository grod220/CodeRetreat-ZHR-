'use strict';

class Grid {
	isAlive(x, y) {
		return false;
	}
}

function converter (x,y) {
  return String(x) + '_' + String(y);
}

module.exports = {
	Grid: Grid,
  converter: converter
};
