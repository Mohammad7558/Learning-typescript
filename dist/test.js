"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// just string type array  
let fruits = ['apple', 'Banana', 'Orange', 'Mango'];
// number or string type array --> can push string or number
let fruitsTwo = ['apple', 12, 'orange', 18];
// if i need to push other string or number i can
fruitsTwo.push(7800);
// another example ↓
let fruitsThreeExample = ['apple', 12, true, false];
console.log(fruitsThreeExample);
// ========== ts tuple ==> fixed value and order ============ //
let coordinates = [20, 30,]; // fixed value and order
let twoFruitsAndNumber = ['apple', 12];
let withBooleanFixedValue = ['banana', 15, true];
let nameAndRoll = ['Mohammad', 1];
// object type 
// ==> Optional type ↓
const user = {
    firstName: 'john',
    middleName: 'the',
    lastName: 'snow'
};
//# sourceMappingURL=test.js.map