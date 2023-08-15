const { expect } = require("chai");

describe("Example Test Suite", () => {
  it("should add two numbers correctly", () => {
    const sum = 1 + 2;
    expect(sum).to.equal(3);
  });

  it("should multiply two numbers correctly", () => {
    const product = 2 * 3;
    expect(product).to.equal(6);
  });
});
