/* 
=============================
 type assertion
==============================
*/

const kgToGMConverter = (value: any): string | number | undefined => {
  if (typeof value === 'string') {
    const [input] = value.split(' ');
    return `Converted To ${Number(input) * 1000}`;
  } else if (typeof value === 'number') {
    return value * 1000;
  }
};

const result1 = kgToGMConverter(10) as number;
const result2 = kgToGMConverter('10 kg') as string;
// console.log({ result1, result2 });




/* 
=============================
 type interface
==============================
*/

// interface: --> just use for object, array, function

interface IUser {
  id: number;
  name: string;
}

interface IUserWithRole extends IUser {
  isAdmin: boolean
}

const user: IUserWithRole = {
  id: 10,
  name: 'Mohammad',
  isAdmin: true
}

// console.log(user);


// #function example 

type Add = (num1: number, num2: number) => number;  // use with type alias

interface IAdd {
  (num1: number, num2: number) : number;
}

const add: IAdd = (num1, num2) => num1 + num2;




// #array example
interface IFriends {
  [index: number] : string;
}

const friends: IFriends = ['A', 'B', 'C'];

// another example --> interface

interface IFriend {
  id: number;
  age: number;
  name: string
}

interface IAdmin extends IFriend {
  isAdmin: boolean
}

const friendsNames: IAdmin = {
  id: 1,
  age: 32,
  name: 'Mohammad',
  isAdmin: true
};

console.log(friendsNames);
// console.log(friendsNames); 

