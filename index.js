let numeros = [];
let soma = 0;
let contador = 0;
let maiorValor = -Infinity;
let menorValor = Infinity;

while (true) {
  let entrada = prompt("Digite um número inteiro positivo (ou 'S' para sair):");

  if (entrada === "S" || entrada === "s") {
    break; // Encerra a entrada de dados quando o usuário digitar 'S' ou 's'
  }

  let numero = parseInt(entrada);

  if (!isNaN(numero) && numero >= 0) {
    numeros.push(numero); // Adiciona o número ao array
    soma += numero; // Atualiza a soma
    contador++; // Incrementa o contador

    if (numero > maiorValor) {
      maiorValor = numero; // Atualiza o maior valor, se necessário
    }

    if (numero < menorValor) {
      menorValor = numero; // Atualiza o menor valor, se necessário
    }
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
  }
}

if (contador === 0) {
  alert("Nenhum número foi digitado.");
} else {
  const media = soma / contador;
  alert("Quantidade de números digitados: " + contador);
  alert("Maior valor digitado: " + maiorValor);
  alert("Menor valor digitado: " + menorValor);
  alert("Média dos números positivos digitados: " + media);
}
