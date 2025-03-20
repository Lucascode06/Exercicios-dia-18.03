console.log ("Campeao Gaucho")


// 1. Verificação de Par ou Ímpar:

function verificarpar (numero){
    if (numero % 2 === 0 ){
        console.log ("Par");
    } else{
        console.log("impar");
    }
} 


//2. Operações Matemáticas Simples:

function calcular (num1, num2) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2 ;

    return {
        soma: soma,
        subtracao: subtracao,
        multiplicacao: multiplicacao,
        divisao: divisao
    };
}


const resultado = calcular(10, 5);
console.log(resultado)

//3. Laço While para Contagem Regressiva:

while (contado>= 1) {
    console.log(contado);
    contado--;  
}

//4. Manipulação de Strings:

function inverterTexto(texto) {
    let caracteres = texto.split('');
    
    let caracteresInvertidos = caracteres.reverse();
    
    let textoInvertido = caracteresInvertidos.join('');
    

    return textoInvertido;
}


let text = prompt("Digite uma palavra:");

let resulta = inverterTexto(textoUsuario);
console.log("" + resulta);




// 5.Contagem de Caracteres em uma String:

function contarCaracteres(texto) {
    return texto.length;
}

let texto = prompt("Digite uma palavra ou frase:");

let resultad = contarCaracteres(textoUsuario);
console.log("" + resultad);



//6. Acessando Propriedades de Objetos:

let carro = {
    marca: 'lamborghini',
    modelo: 'huracan ',
    ano: 2024 
};

console.log(carro.modelo); 

//8. Calculadora de Média:

function media(nu1, nm2, nm3) {
    return (nm1 + nm2 + nm3) / 3;
}


const resul = media(10, 20, 30);
console.log(resul); 

