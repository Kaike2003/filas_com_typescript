class Node<T> {
  public constructor(public value: T, public next: Node<T> | null) {}
}

class Call<T> {
  private node: Node<T> | null;

  public push(data: T) {
    const newNode = new Node(data, this.node);
    this.node = newNode;
  }

  public topo() {
    let current = this.node;
    const data: Node<T>[] = [];
    while (current) {
      data.push(current);
      current = current.next;
    }
    const view = data.map((p) => p.value).join(" -> ");
    console.log(view);
  }

  public pop() {
    if (this.node !== null) {
      const removed = this.node.value;
      this.node = this.node.next;
      return removed;
    } else {
      console.log("Sem registro de chamada.");
    }
  }

  public print() {
    let current = this.node;
    const data: Node<T>[] = [];
    while (current) {
      data.push(current);
      current = current.next;
    }

    const view = data[0].value;
    console.log(view);
  }
}

const call = new Call();
call.push("");
call.push(2);
call.push(3);
call.print();
call.topo();
export {};
