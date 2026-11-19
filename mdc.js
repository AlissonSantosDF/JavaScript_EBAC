function calcularMDC(a, b) {
  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

// Exemplo de uso:
console.log("MDC de 48 e 18:", calcularMDC(48, 18));