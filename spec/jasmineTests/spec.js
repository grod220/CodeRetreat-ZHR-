'use strict';

const conway =  require('../../public/logic.js');

describe("Part 1", function() {
  it("successfulGridCreation", function() {
    expect(new conway.Grid().isAlive(0, 0)).toBe(false);
  });

});

describe("converter", function() {
  it("converts correctly", function() {
    expect(conway.converter(2,3)).toEqual('2_3');
  });

});
