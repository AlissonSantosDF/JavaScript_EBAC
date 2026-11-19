function encontrarIndicesMaiorMenor(numeros) {
  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[indiceMaior]) {
      indiceMaior = i;
    }
    if (numeros[i] < numeros[indiceMenor]) {
      indiceMenor = i;
    }
  }

  return {
    indiceMaior: indiceMaior,
    indiceMenor: indiceMenor
  };
}

// Exemplo de uso:
const lista = [15, 42, 7, 99, 23];
const resultado = encontrarIndicesMaiorMenor(lista);

console.log("Índice do maior valor:", resultado.indiceMaior); 
console.log("Índice do menor valor:", resultado.indiceMenor); 