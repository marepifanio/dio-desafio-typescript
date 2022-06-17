"use strict";
//Inferindo valor na criação
let employee1 = {
    code: 10,
    name: "John"
};
let div1 = document.getElementById("desafio-1");
let addParagrath1 = document.createElement("p");
const botao1 = document.getElementById("botao1");
let contador = 0;
botao1 === null || botao1 === void 0 ? void 0 : botao1.addEventListener('click', () => {
    acaoBotao(div1, addParagrath1);
});
function acaoBotao(div, parag) {
    parag.textContent = `O funcionário chama-se ${employee1.name}`
        + ` e tem o código ${employee1.code}`;
    div === null || div === void 0 ? void 0 : div.appendChild(parag);
}
