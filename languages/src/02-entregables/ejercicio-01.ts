console.log("************** DELIVERABLE 01 *********************");

/* 
    - Just works with arrays and if is empty returns
    - You can pass any type of arrays
    - The function is inmutable
*/

// 01 HEAD - Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = <T>(array: T[]): T | undefined => {
  if (!array) return;
  const [head] = array;
  return head;
};

const arr1 = [1, 2, 3, 4];
console.log("Get the first element result: ", head(arr1));

// 02 TAIL - Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = <T>(array: T[]): T[] | undefined => {
  if (!array) return;
  const [first, ...rest] = array;
  return rest;
};

const arr2 = [1, 2, 3, 4];
console.log("Get all elements without firts: ", tail(arr2));

// 03 INIT - Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = <T>(array: T[]): T[] => {
  if (!array) return;
  return array.slice(0, -1);
};

const arr3 = [1, 2, 3, 4];
console.log("Get all elements without the last one: ", init(arr3));

// 04 LAST - Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = <T>(array: T[]): T => {
  if (!array) return;
  const copy = [...array];
  return copy.pop();
};

const arr4 = [1, 2, 3, 4, 5, 6];
console.log("Get just the last element: ", last(arr4));
