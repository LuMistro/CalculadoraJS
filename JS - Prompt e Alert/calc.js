var numero1 = prompt("Digite o primeiro número");
var numero2 = prompt("Digite o segundo número");
var funcao = prompt("Escolha a operação que deseja efetuar:\n1-Soma\n2-Subtração\n3-Divisão\n4-Multiplicação");
var resultado;

function multiplicação() {
    return numero1 * numero2;
}

function subtração() {
    return numero1 - numero2;
}
function divisao() {
    return numero1 / numero2;
}
function soma() {
    return numero1 + numero2;
}

if (funcao == "1") {
    resultado = soma();
    alert("O resultado da soma é: " + resultado)
}
if (funcao == "2") {
    resultado = subtração();
    alert("O resultado da subtração é: " + resultado)
}
if (funcao == "3") {
    resultado = divisao();
    alert("O resultado da divisão é: " + resultado)
}
if (funcao == "4") {
    resultado = multiplicação();
    alert("O resultado da multiplicação é: " + resultado)
}


