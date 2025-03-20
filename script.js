console.log("Campeão Gaucho");

// 1. Verificação de Par ou impar:
function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("impar");
    }
}

// 2. Operações Matemáticas Simples:
function calcular(num1, num2) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;

    return {
        soma: soma,
        subtracao: subtracao,
        multiplicacao: multiplicacao,
        divisao: divisao
    };
}

const resultado = calcular(10, 5);
console.log(resultado);

// 3. Laço While para Contagem Regressiva:
function contagemRegressiva(inicio) {
    while (inicio >= 0) {
        console.log(inicio);
        inicio--;
    }
}
contagemRegressiva(5); 

// 4. Manipulação de Strings:
function inverter(texto) {
    let caracteres = texto.split('');
    let caracteresInvertidos = caracteres.reverse();
    let textoInvertido = caracteresInvertidos.join('');
    return textoInvertido;
}

let usuario = prompt("Digite uma palavra:");
let resultadoInversao = inverter(usuario);
console.log("" + resultadoInversao);

// 5. Contagem de Caracteres em uma String:
function contarCaracteres(texto) {
    return texto.length;
}

let Contar = prompt("Digite uma palavra:");
let resultadoContagem = contarCaracteres(Contar);
console.log("" + resultadoContagem);

// 6. Acessando Propriedades de Objetos:
let carro = {
    marca: 'Lamborghini',
    modelo: 'Huracan',
    ano: 2024
};

console.log(carro.modelo); 

//7. Função com Parâmetros Opcionais:

function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(mensagem + " " + nome + "");
}


let nomeUsuario = prompt("Digite seu nome:");


let mensagemUsuario = prompt("Digite uma mensagem");


mensagemPersonalizada(nomeUsuario, mensagemUsuario);

// 8. Calculadora de Média:

let n1 = prompt ("Digite um numero")*1;
let n2 = prompt("Digite um numero")*1;
let n3 = prompt("Digite um numero")*1;
function media(n1, n2, n3){
    console.log ((n1 + n2 + n3)/3)
};
media(n1, n2, n3);

// 9. Laço for com Condição:


//Nao consigo 

//10. Verificação de Palavra Palíndroma:

function verificarPalindromo(palavra) {
  
    const palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    

    const palavraInvertida = palavraLimpa.split('').reverse().join('');
    
    
    return palavraLimpa === palavraInvertida;
}


let palavrUsuario = prompt("Digite uma palavra:");

let resu = verificarPalindromo(palavrUsuario);


if (resu) {
    console.log(palavrUsuario + " é um palíndromo.");
} else {
    console.log(palavrUsuario + " não é um palíndromo.");
}



