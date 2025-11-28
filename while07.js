// 7. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let numeroEscolhido = prompt("Digite um número positivo: ");


while (numeroEscolhido > -1) {
    // so entra no while se a coondicao for verdadeiro

    console.log(numeroEscolhido);
    // numeroEscolhido + numeroEscolhido 1;
    numeroEscolhido--; //decrementa po valor escolhido, ou seja, faz a contagem regressiva
}