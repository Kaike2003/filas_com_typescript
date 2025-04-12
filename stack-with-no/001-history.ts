class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

class History<T> {
  private node: Node<T> | null = null;

  public navigate(data: T) {
    const newNode = new Node(data, this.node);
    this.node = newNode;
  }

  public print() {
    let current = this.node;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  public back(): T | string {
    if (this.node) {
      const removed = this.node.value;
      this.node = this.node.next;
      return removed;
    } else {
      return "Sem elementos na pilha";
    }
  }
}

const history = new History();
history.navigate("https://www.facebook.com/");
history.navigate("https://www.youtube.com/");
history.navigate("https://www.tiktok.com/");
history.navigate("https://www.google.com/");
history.back();
history.back(); 

history.print();

export {};
