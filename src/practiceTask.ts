// task 1
const evenNumberArray: number[] = [12, 6, 8, 10];

// task 2
const mixedArray: (string | number | boolean)[] = ['apple', 12, true];

mixedArray.push('banana');

// task 3
const tuple: [string, number, boolean] = ['Mohammad', 12, true];


// task 4
type StudentType = {
    name: string;
    roll: number;
    optionalPhone?: string;
    department: string
}

const student: StudentType = {
    name: 'Mohammad',
    roll: 1,
    optionalPhone: '01572116674',
    department: 'cse'
}


// task 5
const user: {
    name: string;
    age: number
    bloodGroupe: 'A+' | 'B+' | 'O+'
} = {
    name: 'Mohammad',
    age: 23,
    bloodGroupe: 'A+'
}


// task 6

function averageReturn(...value: number[]){
    let total = 0;
    value.forEach((num: number) => {
        total = total + num / value.length
    });
    return total
}

const averageReturnResult = averageReturn(10, 20, 30);
// console.log(averageReturnResult);


// task 7 
type GetStringLength = (value: string) => number
const getStringLength: GetStringLength = (value) => {
    return value.length;
}

const checkStringLength = getStringLength('Mohammad');
// console.log(checkStringLength);


// task 8
const userWithBank = {
    name: 'Mohammad',
    age: 10,
    balance: 1000,
    checkBalance(value: number){
        this.balance = this.balance + value
        return this.balance
    }
}

const userCheckBalance = userWithBank.checkBalance(45);
// console.log(userCheckBalance);



// task 9
const squareArray : number[] = [1,2,3,4];

const resultSquare = squareArray.map((num: number) => num * num);
// console.log(resultSquare);



// task 10
const mergedArrayNumberOne : (string | number | boolean)[] = ['apple', 12, true];
const mergedArrayNumberTwo : (string | number | boolean)[] = ['banana', 22, false];

const mergedArrayResultWithSpread = [...mergedArrayNumberOne, ...mergedArrayNumberTwo];
// console.log(mergedArrayResultWithSpread);



// task 11
function getUnlimitedNumber(...numbers: number[]){
    let total = 0;

    numbers.forEach((num: number) => {
        total = total + num
    });
    return total
}

const sumOfAllNumber = getUnlimitedNumber(10, 20, 50);
// console.log(sumOfAllNumber);




// task 12
const userDestructuring = {
  name: 'Mohammad',
  address: {
    city: 'Tangail'
  }
}

const {address: {city}} = userDestructuring ; // here i am little bit confusion is that separate var or that what i do for this
// console.log(city);


// task 13
const separateLastFriend: string[] = ['max', 'john', 'mia'];
const [, , lastFriend] = separateLastFriend;
// console.log(lastFriend);


// task 14
type Product = {
    id: number;
    name: string;
    price: number;
    isStock: boolean
};

const productNoOne: Product = {
    id: 1,
    name: 'coin',
    price: 4500,
    isStock: true
}
const productNoTwo: Product = {
    id: 2,
    name: 'pack',
    price: 4521,
    isStock: false
}


// task 15
type Multiply = (num1: number, num2: number) => number;

const multiplyNumber : Multiply = (num1, num2) => {
    return num1 * num2
}

const multiplyResult = multiplyNumber(10, 10);
// console.log(multiplyResult);



// task 16
type Status = 'success' | 'Loading' | 'failed';

function checkCurrentStatus(status: Status){
    if(status === 'Loading'){
        return 'user loading'
    }
    else if(status === 'success'){
        return 'user success'
    }
    else{
        return 'user failed'
    }
}

const resultStatus = checkCurrentStatus('Loading');
// console.log(resultStatus);


// task 17
type BasicInfo = {
    id: number;
    name: string
}

type ContactInfo = {
    phoneNumber: string
}

type Combine = BasicInfo & ContactInfo;

const userIntersection : Combine = {
    id: 12,
    name: 'Mohammad',
    phoneNumber: '01572116674'
}


// task 18


const checkIsAdultOrNot = (age: number) => {
    const result = age >= 18 ? 'Adult' : 'minor'; // here i have code writing with my own logic --> the logic is if the number value 18 it will be a adult category 
    return result;
}

const checkAdultOrNot = checkIsAdultOrNot(18);
// console.log(checkAdultOrNot);


// task 19
const userName = undefined;
const resultUserName = userName ?? 'Guest';
// console.log(resultUserName);