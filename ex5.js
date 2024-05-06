// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente.
//  Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let n1 = prompt("Digite o 1° numero")
let n2 = prompt("Digite o 2° numero")
let n3 = prompt("Digite o 3° numero")

if (n1 < n2 && n2 < n3) {
    console.log("Esta em ordem crescente");
} else {
    console.log("Não esta em ordem crescente");
}