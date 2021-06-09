
const { map } = require("../mock");

describe("mock feature:", () => {

  const array = [1, 4, 6];
  let fn;

  beforeEach(() => {
    fn = jest.fn(x => x ** 2);
    map(array, fn);
  });

  test("map function callback", () => {
    expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(array.length);
  });

  test("map function callback times", () => {
    expect(fn.mock.calls.length).toBe(array.length);
  });

  test("map function callback value", () => {
    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(16);
    expect(fn.mock.results[2].value).toBe(36);
  });

  test("fn work", () => {
    fn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue("42");
    
    expect(fn()).toBe(100);
    expect(fn()).toBe(200);
    expect(fn()).toBe("42");
    expect(fn()).toBe("42");
  });

});