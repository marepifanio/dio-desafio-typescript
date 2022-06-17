
//Inferindo valor na criação

let employee1 = {
    code: 10,
    name: "John"
}

let div1 = document.getElementById("desafio-1") as HTMLDivElement;
let addParagrath1 = document.createElement("p");


const botao1 = document.getElementById("botao1") as HTMLButtonElement;

let contador: number = 0;

botao1?.addEventListener('click', () => {
    acaoBotao(div1, addParagrath1);
})


function acaoBotao(div: HTMLDivElement, parag: HTMLParagraphElement) {
    parag.textContent = `O funcionário chama-se ${employee1.name}`
        + ` e tem o código ${employee1.code}`;
        div?.appendChild(parag);
}