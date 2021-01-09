/*

------------ Destructuring ------------
- Object
- Array
- Parameter

*/

// Old Way
var user = {
    name: 'samir',
    gender: 'Male',
    age: '24',
    city: 'ouedzem',
    websites: 'sberrich'
}

var u = user.name,
    g = user.gender,
    a = user.age;
console.log(`My name is :${u}, I am a ${g}, My age Is: ${a}`);

// New Way
const data = {
    name: 'samir',
    gender: 'Male',
    age: '24',
    city: 'ouedzem',
    websites: 'sberrich'
}

const {name,gender,age} = data;
console.log(`My name is :${name}, I am a ${gender}, My age Is: ${age}`);



