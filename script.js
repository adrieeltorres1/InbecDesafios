// Desafio 1 - Fácil: Cálculo de Média Simples

// let notaUm = parseFloat(prompt('Digite a primeira nota de 0 a 10'));
// let notaDois = parseFloat(prompt('Digite a segunda nota 0 a 10'));
// let notaTres = parseFloat(prompt('Digite a terceira nota 0 a 10'));

// let media = (notaUm + notaDois + notaTres) / 3;

// if (media >= 7) {
//     document.write(`Aluno aprovado com média ${media.toFixed()}!`);
// } else {
//     document.write(`Aluno reprovado com média ${media.toFixed()}!`);
// }

// let notaUm = parseFloat(prompt('Digite a primeira nota.'));
// if (notaUm < 0 || notaUm > 10 ) {
//     alert('Insira uma nota entre 0 e 10.');
//     notaUm = parseFloat(prompt('Digite a primeira nota.'));
// }
// let notaDois = parseFloat(prompt('Digite a segunda nota.'));
// if (notaDois < 0 || notaDois > 10) {
//     alert('Insira uma nota entre 0 e 10.');
//     notaDois = parseFloat(prompt('Digite a segunda nota.'));
// }
// let notaTres = parseFloat(prompt('Digite a terceira nota.'));
// if (notaTres < 0 || notaTres > 10 ) {
//     alert('Insira uma nota entre 0 e 10.');
//     notaTres = parseFloat(prompt('Digite a terceira nota.'));
// }
// let media = (notaUm + notaDois + notaTres) / 3;
// if (media >= 7) {
//     document.write(`Aluno está aprovado com média ${media.toFixed()}.`);
// } else {
//     document.write(`Aluno reprovado com média ${media.toFixed()}.`);
// }

// Desafio 1 - Fácil: Par ou Ímpar

// let numeros = parseInt(prompt('Digite um número inteiro'))

// if (numeros % 2 === 0) {
//     document.write('Este número é par');
// } else {
//     document.write('Este número é ímpar');
// }

// ---------------------------------------------------//

// Desafio 2 - Médio: Números Primos

// function numeroPrimo(numero) {
//     if (numero <= 1) return false; 
//     for (let divisor = 2; divisor < numero; divisor++) {
//         if (numero % divisor === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let numero = parseInt(prompt('Digite um número inteiro'));

// if (numeroPrimo(numero)) {
//     document.write(`Número ${numero} é primo.`);
// } else {
//     document.write(`Número ${numero} não é primo.`);
// }

// Desafio 2 - Médio: Jogo de Adivinhação

// https://lua-adivinha.vercel.app/


// Desafio 3 - Difícil: Sequência de Fibonacci com Limite

let recebeQuantidade = parseInt(prompt('Digite a quantidade da sequência que deseja ver'))

let valorUm = 0
let ValorDois = 1
let proximoValor = 0

document.write(valorUm+"\n"+ValorDois)

for(let i=2; i<=recebeQuantidade; i++) {
    proximoValor = valorUm+ValorDois
    document.write("\n" + proximoValor)
    valorUm = ValorDois
    ValorDois = proximoValor
}

// Desafio 3 - Difícil: Validador de Palíndromo

// function Ehpalindromo(palavra) {
//     let palavraLimpa = palavra.toLowerCase().replace(/\s+/g, '');
//     let palavraInvertida = palavraLimpa.split('').reverse().join('');
    
//     return palavraLimpa === palavraInvertida;
// }

// let palavraDigitada = prompt("Digite uma palavra para verificar se é um palíndromo:");

// if (Ehpalindromo(palavraDigitada)) {
//     document.write(`A palavra "${palavraDigitada}" é um palíndromo.`);
// } else {
//     document.write(`A palavra "${palavraDigitada}" não é um palíndromo.`);
// }

