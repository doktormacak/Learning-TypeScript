// forEach, Map, Filter using Reduce<T>

function myForEach<T>(items :T[], forEachFunc:(v:T) => void): void{
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  },undefined);
}

myForEach([1, 2, 3], (v) => console.log(v*v));