//Formas para se definir o tipo de uma variável/constante em NUMBER
const peso1 = 2;
const peso2 = Number('2.0');

console.log(peso1, peso2);

//para verificar se é NUMBER
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// Definindo valores para o cálculo de média
const avaliacao1 = 9.342;
const avaliacao2 = 7.987;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(total);
// Existem funções para manipulação dos tipos NUMBER, no caso abaixo foi utilizado o toFixed para definir as casas decimais do resultado;
console.log(media.toFixed(2));

// Exibindo os tipos das contantes ao final;
console.log(typeof total);
console.log(typeof media);


