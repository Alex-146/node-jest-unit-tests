
class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  get pop() {
    if (Object.keys(this.items).length === 0) return undefined;

    const value = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return value;
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
}

module.exports = Stack;
