'use strict';

/*function calcAge(birthYear){
    const age = 2022 - birthYear;
    
    function printAge (){
        const output = `${firstName} is ${age} born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996){
            const str = `oh and you are a millenial. ${firstName}`;
            console.log(str);
        }
        
    }

    printAge();
    return age;
}

const firstName = 'Jon';
calcAge(1991);*/

//Hoisting and TDZ in practice
/*console.log(me);
console.log(job);
console.log(year);

var me = 'jon';
let job = 'teacher';
const year = 1997;*/

/*//Functions hoisting
console.log(addDecl(1,2));

function addDecl(a,b){
    return a+b
};

const addExpr = function(a,b) {
    return a+b
};

const addArrow = (a,b) => a+b;

//mistake with hoisting
if(!numProducts) deleteShoppingCart();

var numProducts = 10; //hoisted as undefined

function deleteShoppingCart() {
    console.log('All products deleted');
}

//small difference between var, let, const
var x = 1;
const y = 2;
let z = 3;*/

/*
//regular vs arrow function
const jonas = {
    fistName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2022- this.year);
    },

    greet: () => console.log(`Hey ${this.firstName}`) //arrow does NOT have this. uses the parent 'this' (undefined)
}

console.log(jonas.greet());
console.log(jonas.calcAge()); */

//Primitive and  
/*let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

//Objets and weird behaviour
const me = {
    name: 'Jonas',
    age: 30,
}

const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me:', me);
*/

//Primitive vs Objects in practice
// Copying object

const jess = {
    name: 'jess',
    lastName: 'lee',
    age: 27,
}

const jessCopy = Object.assign({}, jess);
jessCopy.lastName = 'cho';
console.log('b4 marry', jess);
console.log('after marry', jessCopy);