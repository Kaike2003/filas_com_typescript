class Historico<T> {
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

const historico = new Historico();
historico.visitar("https://www.facebook.com/");
historico.visitar("https://www.youtube.com/");
historico.visitar("https://www.tiktok.com/");
historico.visitar("https://www.google.com/");

historico.print();

historico.voltar();

historico.print();
