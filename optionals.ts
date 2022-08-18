function printIngredients(quantity: number, ingredient: string, extra?: string){
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`);
}

printIngredients(5, 'apples');

interface User {
  name: string,
  info? : {
    email?: string
  };
}

function getEmail(user: User) {
  return user?.info?.email ?? ''; 
}

function addWithCallback(x: number, y: number, callback?: ()=>void) {
  console.log(x, y);
  callback?.(); 
}