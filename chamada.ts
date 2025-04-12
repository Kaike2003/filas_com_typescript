class Chamada<T> {
  private chamadas: T[] = [];
  chamar(data: T) {
    this.chamadas.push(data);
  }

  ultimaChamada() {
    const ultima = this.chamadas[(this.chamadas.length = 1)];
    console.log(`Ultima chamada ${ultima ?? "Nenhuma chamada registrada."}`);
    return ultima;
  }

  remover() {
    const removida = this.chamadas.shift();
    console.log(`Chamada removida: ${removida ?? "nenhuma chamada para remover"}`);
    return removida;
  }

  chamadasAntigas() {
    const primeira = this.chamadas[0];
    console.log(`Próxima chamada: ${primeira ?? "nenhuma chamada registrada"}`);
    return primeira;
  }

  chamadasRecentes() {
    console.log("Chamadas recentes:");
    if (this.chamadas.length === 0) {
      console.log("Nenhuma chamada registrada.");
      return;
    }
    [...this.chamadas].reverse().forEach((chamada, i) => {
      console.log(`${i + 1}. ${chamada}`);
    });
  }
}

const kaike = new Chamada();
kaike.chamar("97182154");
kaike.chamar("96316215");
kaike.chamar("96316215");
kaike.chamar("96316215");


kaike.chamadasAntigas();
