// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuarío até o 10.

let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada: "));

//======TABUADA X=======
//       2 X 1 = 1 
//       2 x 2 = 
//       2 X 3 =
//       2 X 4 =

//1 numero dentro da condicao de for - inicializando - variavel
//2 numero dentro da condicao do for - condição -  verifica a volta da variavel
//3 numero dentro da condicao do for - incremento - soma das voltas 
// i++ igual a 1 = i=1

console. log(`=====TABUADA ${tabuadaEscolhida}=====`)

for (let i = 1; i <= 10; i++) {
    //       2 X 4 = ?
    console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i));
}