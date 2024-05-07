// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. 
// Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let nascimento = parseInt(prompt("Informe o ano de nascimento"))

let ano_atual = new Date().getFullYear();

let idade = ano_atual - nascimento


if (idade >- 18) {
    console.log("Você é maior de idade");
    console.log("Sua idade é: " + idade);
    
} else {
    console.log("Você é menor de idade");
    console.log("Sua idade é: " + idade);
}
