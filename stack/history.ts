export class History {
  private history: string[] = [];
  private constructor() {}

  public static create() {
    return new History();
  }

  public push(data: string) {
    this.history.push(data);
  }

  public pop() {
    if (this.history.length > 0) {
      let obj = this.history[this.history.length - 1];
      this.history.splice(this.history.length - 1, 1);
      return obj;
    }
  }

  public print() {
    this.history.map((p) => console.log(p));
  }
}
const history = History.create();
history.push("https://www.facebook.com/");
history.push("https://www.youtube.com/");
history.push("https://www.tiktok.com/");
history.push("https://www.amazon.com/");
history.push("https://www.portalmutue.com/");
history.print()
