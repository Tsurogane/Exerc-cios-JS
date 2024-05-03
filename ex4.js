// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO 
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let n1 = parseFloat(prompt("Nota 1°"))
let n2 = parseFloat(prompt("Nota 2°"))
let n3 = parseFloat(prompt("Nota 3°"))
let n4 = parseFloat(prompt("Nota 4°"))

let media = (n1 + n2 + n3 + n4)/4;

console.log("Media do aluno é " + media);

if (media >= 7 ) {
    console.log("Aprovado");
} else if (media > 5 && media < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}