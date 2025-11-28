let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

if (num1 < num2 && num2 < num3) {
    console.log("Os números estão em ordem crescente.");
} else {
    console.log("Os números NÃO estão em ordem crescente.");
}