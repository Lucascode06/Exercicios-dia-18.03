console.log ("Campeao Gaucho")



function verificarpar (numero){
    if (numero % 2 === 0 ){
        console.log ("Par");
    } else{
        console.log("impar");
    }
} 




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



function inverterTexto(texto) {
    if (typeof texto !== 'string') {
    }
  
    return texto.split('').reverse().join('');
  }

  let contador = 10;


while (contador >= 1) {
    console.log(contador);
    contador--;  
}