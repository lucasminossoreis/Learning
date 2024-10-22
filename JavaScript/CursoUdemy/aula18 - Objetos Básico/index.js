function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa("Luiz", "Otávio", 25)
const pessoa2 = criaPessoa("Fábio", "Antunes", 29)
const pessoa3 = criaPessoa("Pedro", "Vasconcelos", 31)
const pessoa4 = criaPessoa("Ana", "Catarina", 40)
const pessoa5 = criaPessoa("Maria", "Oliveira", 65)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome)

const pessoa6 = {
    nome2: "Luiz",
    sobrenome2: "Miranda",
    idade2: 25,

    fala() {
        console.log(`A minha idade é ${this.idade2}`);
    },

    incrementaIdade() {
        this.idade2++;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();