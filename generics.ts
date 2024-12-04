// Generics Functions

const identity = (param: any): any => param; // ❌ Sem relação nos tipos.

const identityWithGenerics = <Type>(param: Type): Type => param; // ✅ Com relação

function functionNotation<Type>(param: Type): Type {
  return param;
}

// Passando Generics Params

const output = identityWithGenerics<string>("umaString");
const output2 = identityWithGenerics("umaOutraString"); // Inferido Automaticamente

// Generics Constraints

interface WithLenght {
  length: number;
}

const printLength = <Type extends WithLenght>(param: Type): void => console.log(param.length);

printLength("teste");
printLength([1, 2, 3, 4, 5, 6]);
printLength({ length: 12, name: "Outro Parâmetro" });
printLength(123); // ❌ O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'WithLenght'.