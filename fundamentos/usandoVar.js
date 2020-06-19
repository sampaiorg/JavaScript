{
  {
    {
      // Exemplo para validar o tipo de acesso de uma variável VAR
      var teste = 'Teste Variável Global';
    }
  }
}

//Quando a variável é criada com VAR o acesso fica Global
console.log(teste);


// Definindo uma VAR dentro de uma function

function variavel() {
  var varFunction = 'Dentro Function';
  console.log(varFunction);
  
}

// A variáve lnão pode ser acessada pois esta delimitada ao escopo da function que foi criada
//console.log(varFunction);
variavel()

// Definindo a variável
var numero = 1
{
  // Sobrescrevendo o valor da variável por ter o mesmo nome fora do escopo
  var numero = 2
  console.log(numero);
}

// Desta forma a variável irá exibir o 2
console.log(numero);
