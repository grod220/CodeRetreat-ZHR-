'use strict';

const conway =  require('../../public/logic.js');

describe("Part 1", function() {
  it("successfulGridCreation", function() {
    expect(new conway.Grid().isAlive(0, 0)).toBe(false);
  });

});

describe("converter", function() {
  const converter = conway.converter;
  it("converts correctly", function() {
    expect(converter.encode(2,3)).toEqual('2_3');
    expect(converter.encode(1, -1)).toEqual('1_-1');
  });
	it('decodes back', () => {
			expect(converter.decode('2_3')).toEqual([2, 3]);
	});

});

describe("grid", function() {
  const newGrid = new conway.Grid([0,1], [0,3]);
  it("initializes", function() {
    expect(newGrid).toBeTruthy();
  });


});
