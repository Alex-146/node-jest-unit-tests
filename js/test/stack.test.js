
const Stack = require("../stack");

describe("stack implementation", () => {
  
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push items to the top", () => {
    stack.push("🥒");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("🥒");

    stack.push("💰");
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe("💰");
  });

  it("can pop off", () => {

    expect(stack.pop).toEqual(undefined);

    stack.push("🥒");
    expect(stack.pop).toBe("🥒");
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});

    stack.push("🥒");
    stack.push("💰");
    expect(stack.pop).toBe("💰");
    expect(stack.pop).toBe("🥒");
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it.todo("can do new feature");

});
