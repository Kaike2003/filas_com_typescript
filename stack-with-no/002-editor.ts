class Node<T> {
  public constructor(public value: T, public next: Node<T> | null) {}
}

class Editor<T> {
  private node: Node<T> | null = null;

  public write(data: T) {
    const newNode = new Node(data, this.node);
    this.node = newNode;
  }

  public print() {
    let current = this.node;
    const data: Node<T>[] = [];
    while (current) {
      data.push(current);
      current = current.next;
    }
    data.reverse();
    const view = data.map((p) => p.value).join(" ");
    console.log(view);
  }

  public back() {
    if (this.node != null) {
      const removed = this.node.value;
      this.node = this.node.next;
      return removed;
    } else {
      console.log("Já não pode voltar.");
    }
  }
}

const editor = new Editor();
editor.write("Kaike");
editor.write("Gaspar");
editor.write("Bartolomeu");
editor.back();
editor.back();
editor.print();

export {};
