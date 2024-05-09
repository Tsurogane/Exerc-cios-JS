//Criar um menu onde é posivel executar 6 dos exercicios anteriores.
//Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
//O usuario podera escokher qual exercicios ele quer visualizar.
//O usuario devera digitar 0 para sair do menu.

function CalculodeIMC() {
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "));

let altura = parseFloat(prompt("Informe o seu altura (em metros): "));

let imc = peso / (altura*altura);

console.log("Seu IMC é:" + imc.toFixed(2));

if(imc < 18.5){
    console.log("Abaixo do peso");
}

else if( imc>= 18.5 && imc <= 24.9 ){
    console.log("Peso normal");
}

else if (imc >= 25.0 && imc <= 29.9){
    console.log("Sobrepeso");
}

else if (imc >= 30.0 && imc <= 34.9){
    console.log("Obsidade grau 1");
}

else if (imc >= 35.0 && imc <= 39.9){
    console.log("Obsidade grau 2");
}

else {
    console.log("Obsidade grau 3");
}
}

let opcao = prompt("Escolha uma opção: \n1 - Exercicio ")