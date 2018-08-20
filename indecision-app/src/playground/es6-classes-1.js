class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! My name is ${this.name}.`;
    } 

    getDescription() {
        return `${this.getGreeting()} I am ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor (name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor())
            return `${description} I am a student majoring in ${this.major}.`;
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation)
            return `${greeting} I'm visiting from ${this.homeLocation}.`;
        return greeting;
    }
}

// const student = new Student('David Greene', 34, 'Biology');
// console.log(student);
// console.log(`Has major: ${student.hasMajor()}`);
// console.log(student.getGreeting());
// console.log(student.getDescription());

// const otherStudent = new Student();
// console.log(otherStudent);
// console.log(otherStudent.getGreeting());
// console.log(otherStudent.getDescription());

// const me = new Person('Shane Overby', 32);
// console.log(me);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other  = new Person();
// console.log(other);
// console.log(other.getGreeting());
// console.log(other.getDescription());

const traveller = new Traveller('Donald Trump', 98, 'Some dude\'s asshole');
console.log(traveller);
console.log(traveller.getGreeting());
console.log(traveller.getDescription());

const otherTraveller = new Traveller();
console.log(otherTraveller);
console.log(otherTraveller.getGreeting());
console.log(otherTraveller.getDescription());