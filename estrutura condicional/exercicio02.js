let numero = parseInt(prompt("Digite um número de 1 a 7:"));

let dias = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];

if (numero >= 1 && numero <= 7) {
    alert(dias[numero - 1]);
} else {
    alert("Número inválido! Digite um número de 1 a 7.");
}