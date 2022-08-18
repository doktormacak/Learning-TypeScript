function addNumbers(a: number, b: number):number {
  return a+b;
}

const addStrings =(str1: string, str2: string): string => `${str1} ${str2}`

const format = (title: string, param: string|number): string => `${title} ${param}`

const fetchData = (url: string) : Promise<string> => Promise.resolve(`Data from ${url}`)

console.log(addNumbers(1, 2));
console.log(addStrings('andrija', 'oreskovic'));
console.log(format('andrija', 47));