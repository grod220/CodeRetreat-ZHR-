'use strict';

const logic =  require('../../public/logic.js');

describe("add10", function() {
  it("should be able to add simply", function() {
    expect(logic(10)).toEqual(20);
  });

  it("should be able to handle negatives", function() {
    expect(logic(-40)).toEqual(-30);
  });

  it("should be able to handle big numbers", function() {
    expect(logic(100000)).toEqual(100010);
  });
});
