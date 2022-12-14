interface Coordinate{
  x: number,
  y: number,
}

function parseCoordinate(obj: Coordinate):Coordinate;
function parseCoordinate(str: string):Coordinate;
function parseCoordinate(x:number, y:number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?:unknown): Coordinate{
 let coordinate : Coordinate = {
   x: 0,
   y:0,
 }
 if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str)=>{
      const [key, value] = str.split(':');
      coordinate[key as 'x' | 'y'] = parseInt(value, 10); 
    });
  } else if (typeof arg1 === 'object') {
  coordinate = {
    ...(arg1 as Coordinate),
  };
 }else {
  coordinate = {
    x: arg1 as number,
    y: arg2 as number,
  }
 }
 return coordinate;
};

console.log(parseCoordinate(10,20));
console.log(parseCoordinate({x:20, y:30}));
console.log(parseCoordinate('x:22,y:33'));