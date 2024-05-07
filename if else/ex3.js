// Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.

let n = parseInt(prompt("Digite um numero"));


if(n % 2 == 0){
    alert("Par");
}
else if(n % 2 == 1){
    alert("Impar");
} else {
    alert("Isso não é um numero")
}
