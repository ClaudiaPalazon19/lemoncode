console.log("************** DELIVERABLE 03 *********************");

interface Person {
  name: string;
  surname?: string;
  country?: string;
  age?: number;
  married?: boolean;
}

const maria: Person = { name: "Maria", surname: "Ibañez", country: "SPA" };
const luisa: Person = { name: "Luisa", age: 31, married: true };

// CLONE - Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const clone = (source: Person): Person => {
  return { ...source };
};

const cloned: Person = clone(maria);
console.log("Cloned object: ", cloned);

// MERGE - Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const merge = (source: Person, target: Person): Person => {
  return { ...target, ...source };
};

const mergedPerson: Person = merge(clone(maria), clone(luisa));
console.log("Merged object: ", mergedPerson);
