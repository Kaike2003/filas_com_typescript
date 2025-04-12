export class Call {
  private call: string[] = [];

  private constructor() {}

  public static create() {
    return new Call();
  }

  public push(data: string) {
    this.call.push(data);
  }

  public pop() {
    if (this.call.length > 0) {
      const removed = this.call[this.call.length - 1];
      this.call.splice(this.call.length - 1, 1);
      return removed;
    }
  }

  public topo() {
    this.call.reverse();
    console.log(this.call[0]);
  }

  public print() {
    const view = this.call
      .reverse()
      .map((p) => p)
      .join(" -> ");
    console.log(view);
  }
}

const call = Call.create();
call.push("943 162 151");
call.push("943 162 152");
call.push("943 162 153");
call.push("943 162 154");
call.pop();
call.topo();
call.print();
