class No<T> {
  constructor(public value: T, public next: No<T> | null = null) {}
}

class Stack<T> {
  private top: No<T> | null = null;

  public insert(data: T): void {
    const newNode = new No(data, this.top);
    this.top = newNode;
  }

  print(): void {
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  public remove(): T | string {
    if (this.top) {
      const removed = this.top.value;
      this.top = this.top.next;
      return removed;
    } else {
      return "Sem elementos na pilha";
    }
  }
}

const stack = new Stack<string>();

stack.insert("Kaike");
stack.insert("Gaspar");
stack.insert("Bartolomeu");

stack.remove();

stack.print(); 

export {};
