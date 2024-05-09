// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let num = parseInt(prompt("Digite um numero para a contagem regressiva."))

console.log("Contagem regressiva esta começando em: " + num);

while (num >= 0) {
    console.log(num);
    num --;

}

console.log("Contagem regressiva finalizada");