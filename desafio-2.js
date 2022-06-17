"use strict";
// Como podemos melhorar o esse código usando TS?
// R: Criando uma interface do tipo pessoa e um enum para as profissões.
var Profissoes;
(function (Profissoes) {
    Profissoes["Atriz"] = "Atriz";
    Profissoes["Padeiro"] = "Pedreiro";
})(Profissoes || (Profissoes = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissoes.Atriz,
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro,
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz,
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
};
let div2 = document.getElementById("desafio-2");
const botao2 = document.getElementById("botao2");
let listaDePessoas = document.createElement("ul");
let pessoas = [
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
botao2 === null || botao2 === void 0 ? void 0 : botao2.addEventListener('click', () => {
    div2 === null || div2 === void 0 ? void 0 : div2.appendChild(listaDePessoas);
});
