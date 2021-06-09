
const { sum, cloneArray } = require("../intro");

describe("intro", () => {
  
  it("properly adds two numbers", () => {
    const x = sum(1, 2);
    
    expect(x).toBe(3);
    expect(x).not.toBeNull();
    // expect(x).toBeInstanceOf(Number);
  });

  test("properly clones array", () => {
    const array = [1, 2, 3];
    const clonedArray = cloneArray(array);
  
    // ! fail - values are equal, but memory address is different
    // expect(clonedArray).toBe(array);
  
    // ! pass - all values in arrays are equals
    expect(clonedArray).toEqual(array);
    
    // ! pass - created clone - memory addresses of each arrays is different
    expect(clonedArray).not.toBe(array);
  
  });

});
