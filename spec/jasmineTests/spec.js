'use strict';

const conway =  require('../../public/logic.js');

describe("Part 1", function() {
  it("successfulGridCreation", function() {
    expect(conway.createGrid(5, 5)).toEqual(true);
  });

});
