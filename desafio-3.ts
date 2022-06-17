let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let valorASomar = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0";



function somarAoSaldo(soma: number) {
    let campoSaldoNumber:number = Number(campoSaldo.innerHTML);
    campoSaldoNumber += soma;
    campoSaldo.innerHTML = campoSaldoNumber.toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(valorASomar.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});