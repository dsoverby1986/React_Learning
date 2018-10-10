// object destructuring

const person = {
    name: 'Shane',
    age: 32,
    location: {
        city: 'Mocksville',
        temp: 76
    }
};

const { name: firstname = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstname} is ${age}.`);

const { temp: temperature, city1 } = person.location;

if(temperature && city1)
    console.log(`It's ${temperature} in ${city1}.`);

// challenge:

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);


// array destructuring

const address = [
    '123 Super Duper Avenue',
    'Chicago',
    'Illinois',
    '23455'
];

const [, city2 = 'Mocksville', state = 'North Carolina' ] = address;

// obviously  not intuitive as to what these indexed address values are...
console.log(`Your are in ${address[1]}, ${address[2]}.`);

console.log(`Your are in ${city2}, ${state}.`);

// challenge:

const item = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];

const [ beverage, , mediumPrice ] = item;

console.log(`A medium ${beverage} costs ${mediumPrice}.`);