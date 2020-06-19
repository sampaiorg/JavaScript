//Atribuindo uma function à uma variável modo padrão
const imprimirsoma = function (a, b) {
  console.log(a+b);
}
imprimirsoma(2, 2)

// Atribuindo uma function utilizando o método com arrow function
const imprimirSomaArrow = (a, b) => {
  return a + b
}
console.log(imprimirSomaArrow(3, 5));

// Atribuindo uma function com arrow function de forma implícito
const somar = (a, b) => a + b;
console.log(somar(5,5));


// Atribuir uma function à variável sem utilizar o parenteses no paâmetro por ter apenas um parâmetro
const imprimir = a => console.log(a);
imprimir('teste')
