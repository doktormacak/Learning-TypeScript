
type MutationFunction = (v:number)=>number;

function arrayMultipy(numbers: number[], mutate: MutationFunction  ):number[] {
  return numbers.map(mutate);
}

function createAdder(x:number): (y: number) => number {
  return (y:number) => x + y;
}

const newAdder = createAdder(5);
console.log(newAdder(44));


console.log(arrayMultipy([1,2,3], (v)=> v*10))