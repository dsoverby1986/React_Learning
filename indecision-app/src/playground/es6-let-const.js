var nameVar = 'Shane';
var nameVar = 'Daniel';
console.log('nameVar', nameVar);

let nameLet = 'Richard';
nameLet = 'Jeff';
console.log('nameLet', nameLet);

const nameConst = 'Gilmore';
console.log('nameConst', nameConst);

// let and const use Block level scoping
// var uses function level scoping

var fullName = 'Shane Overby';
let firstName = undefined;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);