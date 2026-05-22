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
  isAdmin: boolean;
}

const user: IUserWithRole = {
  id: 10,
  name: 'Mohammad',
  isAdmin: true,
};

// console.log(user);

// #function example

type Add = (num1: number, num2: number) => number; // use with type alias

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

// #array example
interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ['A', 'B', 'C'];

// another example --> interface

interface IFriend {
  id: number;
  age: number;
  name: string;
}

interface IAdmin extends IFriend {
  isAdmin: boolean;
}

const friendsNames: IAdmin = {
  id: 1,
  age: 32,
  name: 'Mohammad',
  isAdmin: true,
};

console.log(friendsNames);
// console.log(friendsNames);

/*
===================================  
 Generic
===================================  
*/

type GenericArray<T> = Array<T>;

// const fruits : string[] = ['apple', 'banana', 'orange', 'lemon'];
const fruits: GenericArray<string> = ['apple', 'banana', 'orange', 'lemon'];

// const rollNumbers: number[] = [12, 21, 78, 55];
const rollNumbers: GenericArray<number> = [12, 21, 78, 55];

// const isEligible: boolean[] = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];

// another example
type Coordinates<T, X> = [T, X];
const coordinatesOne: Coordinates<number, number> = [20, 30];
const coordinatesTwo: Coordinates<string, string> = ['20', '30'];

// another example 2
type UserList = {
  name: string;
  age: number;
  favColor: string
}

const userList: GenericArray<UserList> = [
  {
    name: 'Mohammad',
    age: 23,
    favColor: 'blue'
  },
  {
    name: 'Liza',
    age: 20,
    favColor: 'yellow'
  },
  {
    name: 'Mohammad',
    age: 12,
    favColor: 'red'
  }
];