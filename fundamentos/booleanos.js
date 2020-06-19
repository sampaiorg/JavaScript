// atribuindo um valor boolean verdadeiro à variàvel
let isAtivo = true
console.log(isAtivo);

// Atribuindo um valor boolean falso à variável
isAtivo = false
console.log(isAtivo);

// Desta forma é possível um valor verdadeiro com a dupla negação, fazendo a variável ser verdadeira
isAtivo = 1
console.log(!!isAtivo);

console.log('VERDADEIROS');

// Com dupla negação:
//Números inteiros
console.log(!!1);
console.log(!!-4);
//String com espaço
console.log(!!' ');
//String simples
console.log(!!'texto');
//Array vazia
console.log(!![]);
//Objeto vazio
console.log(!!{});
//Retorno Infinity
console.log(!!Infinity);
// Com atibuição de boolean
console.log(!!(isAtivo = true));

console.log('FALSOS');

// Utilizando o Zero
console.log(!!0);
// com string vazia
console.log(!!'');
// com valores nulos
console.log(!!null);
// com not a number
console.log(!!NaN);
// com undefined
console.log(!!undefined);
// com atribuição de valor falso
console.log(!!(isAtivo = false));

// com todos os valores falsos
console.log(!!('' || null || 0));

let nome = 'Rafael'
console.log(nome || 'Não informado');















