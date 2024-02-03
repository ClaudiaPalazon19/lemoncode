console.log("************** DELIVERABLE 02 *********************");

// CONCAT

const arrConcat = [1, 2, 3, 4];
const arrConcat2 = [5, 6, 7, 8];
const arrConcat3 = [9, 10, 11, 12];
const arrConcat4 = [13, 14, 15, 16];

// 01 - Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = <T>(array1: T[], array2: T[]): T[] => {
  return [...array1, ...array2];
};

console.log(
  "Get the concatenation of two arrays: ",
  concat(arrConcat, arrConcat2)
);

// 02 - Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concatAll = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((acc, array) => [...acc, ...array], []);
};

console.log(
  "Get the concatenation of multiples arrays: ",
  concatAll(arrConcat, arrConcat2, arrConcat3, arrConcat4)
);
