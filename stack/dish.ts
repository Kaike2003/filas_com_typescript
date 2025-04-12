export class Dish {
  private dish: string[] = [];

  private constructor() {}

  public static create() {
    return new Dish();
  }

  public push(data: string) {
    this.dish.push(data);
  }

  public pop() {
    if (this.dish.length > 0) {
      let removed = this.dish[this.dish.length - 1];
      this.dish.splice(this.dish.length - 1, 1);
      return removed;
    }
  }

  public print() {
    const view = this.dish.map((p) => p).join(" -> ");
    console.log(view);
  }
}

const dish = Dish.create();
dish.push("p-1");
dish.push("p-2");
dish.push("p-3");
dish.pop()
dish.print();
