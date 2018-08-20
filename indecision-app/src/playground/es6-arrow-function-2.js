// arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments); --- if the arguments object is needed use es5 function instead of es6 arrow function
    return a + b;
};
console.log(add(2, 5));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Shane',
    cities: [
        'Mocksville',
        'Advance',
        'Winston'
    ],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}!`);

        /*this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}`);
        });*/
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 4, 5],
    multiplyBy: 12,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());