"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let valorASomar = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    let campoSaldoNumber = Number(campoSaldo.innerHTML);
    campoSaldoNumber += soma;
    campoSaldo.innerHTML = campoSaldoNumber.toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(valorASomar.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
