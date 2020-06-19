// A diferença entre VAR e LET, é que o let estará acessível no escopo que foi definida

let numero = 1
{
  let numero = 2
  console.log("Dentro: ", numero);
}
  console.log("Fora: ", numero);