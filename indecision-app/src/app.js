import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.firstName = "Shane";
        this.lastName = "Overby";
        this.getFullName = this.getFullName.bind(this);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getFullName());
const getFullName = oldSyntax.getFullName;
console.log(getFullName());
//-------------------

class NewSyntax {
    firstName = "Shane";
    lastName = "Overby";
    getFullName = () => `${this.firstName} ${this.lastName}`;
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
console.log(newSyntax.getFullName());
const newGetFullName = newSyntax.getFullName;
console.log(newGetFullName());