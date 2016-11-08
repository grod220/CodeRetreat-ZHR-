'use strict';

function createBoard (coords) {
  this.cellGrid = {};
  coords.forEach(function(cell) {
    this.cellGrid[this.encode(cell)] = true;
  }, this);
}

createBoard.prototype.getNeighbors = function(cell, addToCellGrid) {
  let neighborsArr = [];
  for (var dx=-1; dx<2; dx++) {
    for (var dy=-1; dy<2; dy++) {
      let x2 = dx + cell[0];
      let y2 = dy + cell[1];
      if (x2 === cell[0] && y2===cell[1]) continue;
      neighborsArr.push([x2,y2]);
      if (addToCellGrid && this.cellGrid[this.encode([x2,y2])] !== true) this.cellGrid[this.encode([x2,y2])] = 'maybe';
    }
  }
  return neighborsArr;
};
createBoard.prototype.countAliveNeighbors = function(cell) {
  let count = 0;
  let neighborsArr = this.getNeighbors(cell);
  neighborsArr.forEach(function(cell) {
    if (this.cellGrid[this.encode(cell)] === true) count++;
  }, this);
  return count;
};

createBoard.prototype.nextStep = function() {
  // add neighbords to evalua

  let copy = {};
  for (let cell in this.cellGrid) {
    this.getNeighbors(this.decode(cell), true);
  }
  for (let cell in this.cellGrid) {
    let aliveNum = this.countAliveNeighbors(this.decode(cell));
    if (this.cellGrid[cell] === true) {
      if (aliveNum === 3 || aliveNum === 2) {
          // console.log(aliveNum, cell)
        copy[cell] = true;
      }
    } else {
      if (aliveNum > 3) {
        // console.log(aliveNum, cell)
        copy[cell] = true;
      }
    }
  }
  this.cellGrid = copy;
};

createBoard.prototype.encode = function(cellArr) {
  return String(cellArr[0]) + '_' + String(cellArr[1]);
};
createBoard.prototype.decode = function(str) {
  return str.split('_').map(num=>Number(num));
};

createBoard.prototype.illustrate = function(grid) {
  let xArr = [];
  let yArr = [];

  for (let cell in grid) {
    xArr.push(this.decode(cell)[0]);
    yArr.push(this.decode(cell)[1]);
  }

  let rows = Math.max.apply(null,xArr);
  let columns = Math.max.apply(null,yArr);

  let illGrid = [];
  for (let i=0; i<=rows; i++) {
    illGrid.push([]);
    for (let j=0; j<=columns; j++) {
      let status = this.cellGrid[this.encode([i,j])];
      illGrid[i][j] = status ? 1 : 0;
    }
  }
  return illGrid;
};


var newBoard = new createBoard([[0,1], [2,3], [1,3], [4,5], [0,0], [1,1], [1,0], [2,0], [1,2]]);
// console.log(newBoard.cellGrid);
// console.log(newBoard.countAliveNeighbors([0,1]));
console.log(newBoard.illustrate(newBoard.cellGrid));
console.log(newBoard.nextStep());
// console.log(newBoard.cellGrid);
console.log(newBoard.illustrate(newBoard.cellGrid));





