//FUNÇÃO SEM RETORNO
function somaSemRetorno(a, b) {
  console.log(a+b);
}

somaSemRetorno(2, 5)


//FUNÇÃO COM RETORNO

function somaComRetorno(a, b) {
  return a+b
}
console.log(somaComRetorno(3,9));


//DEFININDO VALOR PADRÃO PARA PARÂMETRO

function valorPadrao(a, b = 0) {
  return a+b
}
console.log(valorPadrao(1));
