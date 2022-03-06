'use strict';
/*
//New default values
const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199*numPassengers){

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking); //save into external Array
}

createBooking('LH123', 2)
*/
//Primitive vs Reference types
/*
const flight = 'LH234'
const jonas = {
    name: 'jonas schmit',
    passport: 12345678,
};

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 12345678) {
        alert('Check In');
    } else {
        alert('Wrong passport')
    }
}

checkIn(flight, jonas)
console.log(flight);
console.log(jonas);
*/

/*
//High-order functions (function accepting callback)
const oneWord = function(str){
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order Function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Hello World!', upperFirstWord)
*/

//Functions return function
/*
const greet = function(greeting){
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('hey');

//rewrite above function return function using arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hiza')('Noob')


//creating functiom return function for TAX + VAT
const addTax1 = function(rate){
    return function(value){
        return value + value*rate
    };
};

const addVAT1 = addTax1(0.1);
console.log(addVAT1(100))
*/

//Call and Apply methods
/*
const virginAus = {
    airline: 'Virgin Australia',
    iataCode: 'VA',
    bookings: [],

    //book: function(){}
    book(flightNum, name)  {
        console.log(`${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}`, name})
    }
}

virginAus.book(103792782, 'Chris')
virginAus.book(976, 'Charles')
console.log(virginAus);

const govAirlines = {
    airline: 'Gov Airlines',
    iataCode: 'GA',
    bookings: [],
}

const book = virginAus.book;

book.call(govAirlines, 765, 'Joe')

//blind method
const bookGA = book.bind(govAirlines);
bookGA(178, 'Lebron james');
console.log(govAirlines);

//Bind and event listeners
virginAus.planes = 300;
virginAus.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
console.log(virginAus);

document.querySelector('.buy').addEventListener('click', virginAus.buyPlane.bind(virginAus));

//bind and partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.10, 100));

//using a rate that doesn't change. eg 20% VAT
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
*/


//Coding challenge
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0), //We will learn next module
    
    registerNewAnswer(num=this.options.length+2){
        num = prompt(`${poll.question}\n${poll.options.join(',').replaceAll(',', '\n')} \n(write option number)`);
        console.log(`Answer received: ${num}`);
        
        //check Num
        while(isNaN(num)||
        num ===''||
        !(Number(num) <= this.options.length-1 && Number(num) >= 0)){
            alert('Please enter an integer from options provided');
            num = prompt(`${poll.question}\n${poll.options.join(',').replaceAll(',', '\n')} \n(write option number)`);
        };
        let checkedNum = 0;
        if (num !== '') {
            checkedNum = Number(num)
        };

        //Check if number provided is valid/invalid code
        if (checkedNum <= this.options.length-1 && checkedNum >= 0) {
            console.log('Valid answer');
            this.answers[checkedNum]++;
            //onsole.log(this.answers, typeof(this.answers));
            this.displayResults('string');
            this.displayResults();
        };
    },

    displayResults(type='array'){
        if (type === 'array') {
            console.log(this.answers);
        };
        if(type === 'string') {
            console.log(`poll results are ${this.answers.join(', ')}`);
            //'0: JavaScript'
        }
    }
};

//attach method to button
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

//use displayResults method to display external arrays
poll.displayResults.call({answers: [5,2,3]})

poll.displayResults.call({answers: [1,5,3,9,6,1]})
*/

//IIFE
/*
(function(){
    console.log('this is a ImmediatelyInvokedFE');
})()

//Wrapping protected variables in a box
{const protectedNum = 1235}
*/


//Closures
//Closure eg 1 
/*
const secureBooking = function() {
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

const booker2 = secureBooking()

booker();
booker();
booker();

booker2();
booker2();
booker();

console.dir(booker);
console.dir(booker2)
*/

//Closure eg
/*
//f is DEFINED in global scope
let f;

//f is then assigned function in this g context -> Still closed over
const g = function() {
    const a = 23;
    f =  function(){
        console.log(a*2);
    }
}

//
const h = function() {
    const b = 777;
    f =  function(){
        console.log(b*2);
    }
}

g()
f()

//re-assigning f function
h()
f()
console.dir(f)
*/

//closure eg timer
/*
const boardPassengers = function(n, wait) {
    const perGroup = n /3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, weach with ${perGroup} passengers`);
    }, wait*1000); 
    
    console.log(`will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3)
*/

//Coding Challenge 2
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue'
    });
})();