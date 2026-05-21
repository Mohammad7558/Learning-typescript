// just string type array
let fruits: string[] = ['apple', 'Banana', 'Orange', 'Mango'];

// number or string type array --> can push string or number
let fruitsTwo: (string | number)[] = ['apple', 12, 'orange', 18];

// if i need to push other string or number i can
fruitsTwo.push(7800);

// another example ↓

let fruitsThreeExample: (string | number | boolean)[] = [
  'apple',
  12,
  true,
  false,
];

// console.log(fruitsThreeExample);

// ========== ts tuple ==> fixed value and order ============ //
let coordinates: [number, number] = [20, 30]; // fixed value and order

let twoFruitsAndNumber: [string, number] = ['apple', 12];

let withBooleanFixedValue: [string, number, boolean] = ['banana', 15, true];

let nameAndRoll: [string, number] = ['Mohammad', 1];

// object type

// ==> Optional type ↓
const user: {
  organization: 'Programming Hero';
  firstName: string;
  middleName?: string; // --> optional
  lastName: string;
} = {
  organization: 'Programming Hero',
  firstName: 'john',
  middleName: 'the',
  lastName: 'snow',
};

/* 
=================================================
 * function, array function, normal function  -->  ↓
=================================================
 */

// this is the normal function with type and also return type what i return, what type is it
function add(num1: number, num2: number): number {
  return num1 + num2;
}

const result = add(2, 1);
// console.log(result);

// #arrow function

const addNumberWithArrow = (num1: number, num2: number): number => num1 + num2;

const arrowNumberPlusResult = addNumberWithArrow(10, 10); // --> valid code ✅
// const anotherArrowNumberPlusResult = addNumberWithArrow(10, '10');  // --> invalid code ❌
// console.log(arrowNumberPlusResult);

// #object => function + method
const poorUser = {
  name: 'mohammad',
  balance: 0,
  addBalance(value: number) {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};
const objectMethodResult = poorUser.addBalance(45); // --> here is the way to send value in the method

// #map use //

const numberArray: number[] = [1, 2, 3];

const squareNumber = numberArray.map((element: number) => element + element);
// console.log(squareNumber);

/* 
=================================================
 * Rest, spread operator  -->  ↓
=================================================
 */

// #Array Spread Operator
const friends = ['max', 'john'];
const schoolFriends = ['dua', 'mia', 'heaven'];
const collageFriends = ['Mr.smart', 'Mr. very smart'];

friends.push(...schoolFriends); // --> its call spread operator
friends.push(...collageFriends); // --> Same

// #Object Spread Operator
const myInfo = {
  name: 'Mohammad',
  phone: '01572116674',
};

const otherInfo = {
  hobby: 'football',
  favColor: 'sky Blue',
};

const userInfo2 = {
  ...myInfo,
  ...otherInfo,
};

// #Rest Operator
const sendInvite = (...fruits: (string | number)[]) => {
  // fruits.forEach((fruit: (string | number)) => console.log(`Send to eat ${fruit}`))
};

sendInvite('apple', 'banana', 'orange', 'pine-apple', 471);

/*
==========================================
 * Destructuring in typescript --> ↓
==========================================
*/

// #Object Destructuring

const objectDestructuringUserExample = {
  id: 123,
  name: {
    firstName: 'Mohammad',
    middleName: 'Bin',
    lastName: 'Amin',
  },
  gender: 'male',
  favColor: 'sky blue',
};

const {
  favColor: myFavColor,
  name: { middleName },
} = objectDestructuringUserExample; // object destructuring
// console.log(myFavColor, middleName);

// #Array Destructuring
const friendsArray = ['max', 'john', 'heaven'];

const [, , myBest] = friendsArray; // --> array destructuring and array skipping
// console.log(myBest);

/*
========================================= 
* Type Alias in typescript
=========================================
*/

type UserAlias = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const userAlias: UserAlias = {
  id: 123,
  name: {
    firstName: 'Mohammad',
    lastName: 'Bin Amin',
  },
  gender: 'male',
  contactNo: '01572116674',
  address: {
    division: 'Dhaka',
    city: 'Tangail',
  },
};

const userAliasTwo: UserAlias = {
  id: 123,
  name: {
    firstName: 'max',
    lastName: 'john',
  },
  gender: 'female',
  contactNo: '072116674',
  address: {
    division: 'new-york',
    city: 'meg',
  },
};

// #type alias with function

type AddFunc = (num1: number, num2: number) => number;

const addFunc: AddFunc = (num1, num2) => {
  return num1 + num2;
};

const aliasResult = addFunc(10, 20);
// console.log(aliasResult);

// #type alias with array
type MixedArray = (string | number)[];

const mixedArrays: MixedArray = ['apple', 12];
// console.log(mixedArrays);

type ProductsArray = {
  id: number;
  name: string;
  price: number;
  isStock: boolean;
  offered?: 'yes' | 'no';
};

const products: ProductsArray[] = [
  { id: 1, name: 'shampoo', price: 100, isStock: true },
  { id: 2, name: 'soap', price: 150, isStock: true, offered: 'yes' },
];

/*
=========================================
 * Union & intersection types
=========================================
*/

// #union type

type UserRole = 'admin' | 'user' | 'guest';

const getDashboard = (role: UserRole) => {
  if (role === 'admin') {
    return 'admin dashboard';
  } else if (role === 'user') {
    return 'user dashboard';
  } else {
    return 'guest dashboard';
  }
};

const resRole = getDashboard('guest');
// console.log(resRole);

// #intersection types
type Name = {
  firstName: string;
};
type Age = {
  age: number;
};

type UsersRoles = Name & Age; // --> intersection use here

const usersRoleCheck: UsersRoles = {
  firstName: 'Mohammad',
  age: 20,
};

/*
=========================================
 * ternary, nullish coalescing & optional chaining
=========================================
*/

// #ternary operator --> : decision making

const checkMarriedAge = (age: number) => {
  const result = age >= 21 ? 'Your are eligible' : 'You are not eligible';
  return result;
};

const marriedAgeResult = checkMarriedAge(20);
// console.log(marriedAgeResult);

// #nullish Coalescing
const userTheme = undefined;

const userThemeResult = userTheme ?? 'Light Theme';
// console.log(userThemeResult);




// #optional chaining

const userOptionalChaining: {
  name: string;
  address: {
    city: string;
    house: {
      firstAddress?: string;
    };
  };
} = {
  name: 'Mohammad',
  address: {
    city: 'Dhaka',
    house: {
      firstAddress: 'Tangail',
    },
  },
};

const getFirstAddress = userOptionalChaining?.address?.house?.firstAddress;
// console.log(getFirstAddress);





/*
========================================= 
 * nullable, unknown & never type
=========================================
*/


let userName: string | null = null;

console.log(userName);

const unknownFunc = (value: unknown) => {
  if(typeof value === 'string'){
    return 'i Am string'
  }
  else if(typeof value === 'number'){
    return 'i am number'
  }
  else {
    return value;
  }
}

const checkUnknown = unknownFunc([]);
console.log(checkUnknown);