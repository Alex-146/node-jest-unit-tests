
const Lodash = require("../lodash");

describe("Lodash:", () => {
  
  const _ = new Lodash();

  test("compact: result doesn't contain falsy values", () => {
    const array = ["hello", null, 1, true, "", undefined, 0, false];
    const result = _.compact(array);
    expect(result).not.toContain(0);
    expect(result).not.toContain("");
    expect(result).not.toContain(false);
    expect(result).not.toContain(null);
    expect(result).not.toContain(undefined);
  });

  test("groupBy using Math.floor", () => {
    const array = [2.2, 1.46, 2.4, 3.8];
    const result = {
      1: [1.46],
      2: [2.2, 2.4],
      3: [3.8]
    }
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test("groupBy using length", () => {
    const array = ["one", "two", "three"];
    const result = {
      3: ["one", "two"],
      5: ["three"]
    }
    expect(_.groupBy(array, "length")).toEqual(result);
  });

  test("gropBy should not return array", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});