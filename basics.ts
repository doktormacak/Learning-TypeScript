let names:string = 'Andrija';

let hasLogged: boolean = true;

let regEx:RegExp = /foo/;

let x:number = 2;

const letters:string[] = names.split("");

const myNumbers:Array<number> = [1, 2, 3];

interface person {
  name:string,
  lastName: string,
}

const Person:person = {
  name : 'Andrija',
  lastName : 'Oreskovic'
}

const ids: Record<number, string> = {
  10: 'Hello',
  20: 'World',
}

ids[30] = 'C';

