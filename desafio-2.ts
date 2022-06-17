// Como podemos melhorar o esse código usando TS?
// R: Criando uma interface do tipo pessoa e um enum para as profissões.

enum Profissoes {
    Atriz = "Atriz",
    Padeiro = "Pedreiro",
}

interface Pessoa {
    nome: String;
    idade: Number;
    profissao: Profissoes;
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissoes.Atriz,
}

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro,
}


let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz,
}

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
}


let div2 = document.getElementById("desafio-2") as HTMLDivElement;
const botao2 = document.getElementById("botao2") as HTMLButtonElement;
let listaDePessoas = document.createElement("ul") as HTMLUListElement;

let pessoas: Pessoa[] = [
    pessoa1,
    pessoa2,
    pessoa3,
    pessoa4,
];

pessoas.forEach(element => {
    let pessoaASerAdd = document.createElement("li");
    pessoaASerAdd.textContent = `${element.nome} tem ${element.idade} e é ${element.profissao}`;
    listaDePessoas.appendChild(pessoaASerAdd);
});

botao2?.addEventListener('click', () => {
    div2?.appendChild(listaDePessoas);
})