export class Editor {
  private editor: string[] = [];

  private constructor() {}

  public static create() {
    return new Editor();
  }

  public write(data: string) {
    this.editor.push(data);
  }

  public pop() {
    if (this.editor.length > 0) {
      const obj = this.editor[this.editor.length - 1];
      this.editor.splice(this.editor.length - 1, 1);
      return obj;
    }
  }

  public print() {
    const view = this.editor.map((p) => p).join(" ");
    console.log(view);
  }
}

const editor = Editor.create();
editor.write("Ola");
editor.write("mundo");
editor.write("com");
editor.write("typescript");
editor.print();
