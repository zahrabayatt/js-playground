const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  get count() {
    return _items.get(this).length;
  }

  peak() {
    if (this.count === 0) {
      throw new Error("Stack is empty.");
    }

    return _items.get(this)[this.count - 1];
  }

  pop() {
    if (this.count === 0) {
      throw new Error("Stack is empty.");
    }

    return _items.get(this).pop();
  }

  push(item) {
    _items.get(this).push(item);
  }
}

const stack = new Stack();
