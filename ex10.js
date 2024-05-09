// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let num;
do {
    num = parseInt(prompt("Digite um numero (Digite 0 para sair)"))
} while (num !== 0);

console.log("Você digitou 0. O progama foi encerrado.");