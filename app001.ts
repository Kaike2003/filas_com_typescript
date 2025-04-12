class Stack<T> {
  private stack: T[] = [];

  public insert(data: T) {
    this.stack[this.stack.length] = data;
  }

  public print() {
    this.stack.map((p) => console.log(p));
  }

  public remove(): T | string {
    if (this.stack.length > 0) {
      let obj = this.stack[this.stack.length - 1];
      this.stack.splice(this.stack.length - 1, 1);
      return obj;
    } else {
      return "Sem elementos na pilha";
    }
  }
}

const stack = new Stack();
stack.insert("kaike");
stack.insert("Gaspar");
stack.insert("Bartolomeu");
stack.remove()

stack.print();
