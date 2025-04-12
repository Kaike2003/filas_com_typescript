class Node<T> {
  public constructor(public value: T, public next: Node<T> | null) {}
}

class Dish<T> {
  private node: Node<T> | null;

  public push(data: T) {
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
    const view = data.map((p) => p.value).join(" -> ");
    console.log(view);
  }

  public pop() {
    if (this.node !== null) {
      const removed = this.node.value;
      this.node = this.node.next;
      return removed;
    } else {
      console.log("Sem pratos para remover.");
    }
  }
}

const dish = new Dish();
dish.push("prato 1");
dish.push("prato 2");
dish.push("prato 3");
dish.pop();
dish.print();
export {};
