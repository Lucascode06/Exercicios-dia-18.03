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



while (contador >= 1) {
    console.log(contador);
    contador--;  
}

//6. Acessando Propriedades de Objetos:

let carro = {
    marca: 'lamborghini',
    modelo: 'huracan ',
    ano: 2024 
};

console.log(carro.modelo); 
