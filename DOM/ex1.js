//Criar um menu onde é posivel executar 6 dos exercicios anteriores.
//Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
//O usuario podera escokher qual exercicios ele quer visualizar.
//O usuario devera digitar 0 para sair do menu.

function CalculodeIMC() {
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "));

    let altura = parseFloat(prompt("Informe o seu altura (em metros): "));

    let imc = peso / (altura * altura);

    console.log("Seu IMC é:" + imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    }

    else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Sobrepeso");
    }

    else if (imc >= 30.0 && imc <= 34.9) {
        console.log("Obsidade grau 1");
    }

    else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obsidade grau 2");
    }

    else {
        console.log("Obsidade grau 3");
    }
}
function loopWhile() {
    let num = 0;

    console.log("Numeros pares de 0 a 20");

    while (num <= 20) {
        if (num % 2 == 0) {
            console.log(num);
        }
        num++;

    }
}

function ifElse() {
    let username = prompt("Digite um nome de usuario")
    let senha = prompt("Digite a senha")

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido");
    } else {
        console.log("Voce não tem permissão de acesso!");
    }
}

function SequenciaDeFibonacci() {
    let fib1 = 1;
    let fib2 = 1;

    console.log("Os primeiro 10 números da sequência de Fibonacci são: ")
    console.log(fib1);
    console.log(fib2);

    for (let i = 2; i < 10; i++) {
        let nextFib = fib1 + fib2;
        console.log(nextFib);

        fib1 = fib2;
        fib2 = nextFib;
    }

}

function calculodeDesconto() {
    let valorTotal = parseFloat(prompt("Informe o valor total da compra: "))

    let desconto;

    if (valorTotal <= 100) {
        desconto = 0;
        console.log("O valor de desconto foi: " + desconto);
    }
    else if (valorTotal <= 200) {
        desconto = 0.1;
        console.log("O valor de desconto foi de: " + (desconto * 100) + "%");
    } else {
        desconto = 0.2;
        console.log("O valor de desconto foi de: " + (desconto * 100) + "%");
    }

    let valorFinal = valorTotal - (valorTotal * desconto);

    console.log("Valor final da compra com o desconto: R$" + valorFinal.toFixed(2));
}

function doWhile() {
    let num;
    do {
        num = parseInt(prompt("Digite um numero (Digite 0 para sair)"))
    } while (num !== 0);

    console.log("Você digitou 0. O progama foi encerrado.");
}

let opcao;

do {
    opcao = prompt("Escolha uma opção: \n0 - Digite 0 para sair  \n1 - Exercicio de Calculo de IMC\n2 - Sequencia de Fibonacci\n3 - If Else\n4 - Loop While\n5 - Calculo de Desconto\n6 - Do While")

switch (opcao) {
    case "0":
        console.log("Saiu");
        break;
    case "1":
        CalculodeIMC()
         break;
    case "2":
        SequenciaDeFibonacci()
        break;
    case "3":
        ifElse()
        break;
    case "4":
        loopWhile()
    case "5":
        calculodeDesconto()
        break;
    case "6":
        doWhile()
        break;

    default:
        console.log("Isso é uma opção?");
        break;
}

} while (opcao != "0");