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

const { temp: temperature, city } = person.location;

if(temperature && city)
    console.log(`It's ${temperature} in ${city}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);