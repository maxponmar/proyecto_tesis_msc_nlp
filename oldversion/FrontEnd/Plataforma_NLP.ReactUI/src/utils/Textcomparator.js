function calcularDiferenciaTexto(texto1, texto2) {
  const longitudTexto1 = texto1.length;
  const longitudTexto2 = texto2.length;

  if (longitudTexto1 === 0) return longitudTexto2;
  if (longitudTexto2 === 0) return longitudTexto1;

  const matriz = [];

  // Inicializar la matriz
  for (let i = 0; i <= longitudTexto1; i++) {
    matriz[i] = [i];
  }

  for (let j = 0; j <= longitudTexto2; j++) {
    matriz[0][j] = j;
  }

  // Calcular las diferencias
  for (let i = 1; i <= longitudTexto1; i++) {
    for (let j = 1; j <= longitudTexto2; j++) {
      const costo = texto1.charAt(i - 1) === texto2.charAt(j - 1) ? 0 : 1;
      matriz[i][j] = Math.min(
        matriz[i - 1][j] + 1,
        matriz[i][j - 1] + 1,
        matriz[i - 1][j - 1] + costo
      );
    }
  }

  // Devolver la distancia de Levenshtein
  return matriz[longitudTexto1][longitudTexto2];
}

export function compararTextos(texto1, texto2) {
  console.log("texto1", texto1);
  console.log("texto2", texto2);
  const longitudTexto1 = texto1.length;
  const longitudTexto2 = texto2.length;
  const distancia = calcularDiferenciaTexto(texto1, texto2);
  console.log(distancia);
  const porcentajeDiferencia =
    (distancia / Math.max(longitudTexto1, longitudTexto2)) * 100;
  return porcentajeDiferencia;
}
