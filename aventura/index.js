class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque;

    switch (this.tipo) {
      case "guerreiro":
        ataque = "espada";
        break;
      case "mago":
        ataque = "magia";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }
    console.log("O " + this.nome + " atacou usando " + ataque);
}

}

const hero1 = new hero("goku", 30, "guerreiro");
const hero2 = new hero("vegeta", 30, "mago");
const hero3 = new hero("piccolo", 30, "monge");
const hero4 = new hero("kuririn", 30, "ninja");

hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();





