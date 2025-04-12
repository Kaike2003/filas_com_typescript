class Editor<T> {
  private historico: T[] = [];

  public visitar(data: T) {
    this.historico[this.historico.length] = data;
  }

  public print() {
    this.historico.map((p) => console.log(p));
  }

  public voltar() {
    if (this.historico.length > 0) {
      let obj = this.historico[this.historico.length - 1];
      this.historico.splice(this.historico.length - 1, 1);
      return obj;
    } else {
      return "Sem elementos na pilha";
    }
  }
}

const editor = new Editor();
editor.visitar("Angola");
editor.visitar("é um pais");
editor.visitar("lindo e belo");

editor.voltar();

editor.print();
