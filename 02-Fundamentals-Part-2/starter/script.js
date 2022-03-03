'use strict';

/*function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(3, 4));*/

//logical operators

/*const myCountryPopulation = 2000;
const myCountryLanguage = 'English';
const myCountryIsland = true;

if (myCountryPopulation < 50000 && myCountryLanguage === 'English' && myCountryIsland) {
    console.log('Sarah can live here.')
} else {
    console.log('Sarah should not live here')
}*/

/*switch
const language = prompt("What language do you speak?")

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log("Most spoken");
        break;
    case 'spanish':
        console.log("2nd most spoken");
        break;
    case 'english':
        console.log('3rd most spoken');
        break;
    default:
        console.log('Nice language too');
}*/

/*ternary operator
const ausPopulation = myCountryPopulation >= 33000 ? 'Aus population is above average' : 'Aus population is below average';
console.log(ausPopulation);

console.log(
    `My country's population is ${myCountryPopulation > 3300 ? 'above' : 'below'} the average population`
)*/

//Functions
/*function describeCountry(country, population, captialCity) {
    let description = `${country} has a ${population} people and its capital city is ${captialCity}`;
    return description;
}

const australia = describeCountry('Australia', 33, 'Canberra');
const england = describeCountry('England', 50, 'London');
const usa = describeCountry('America', 100, 'Washington');
console.log(australia, england, usa);*/

//functions
/*function percentageOfWorld1(population) {
    let percentage = (Number(population) / 7900) * 100;
    return percentage;
}

const thirtymil = percentageOfWorld1(300);
console.log(thirtymil);

function calcAge1(birthYear) {
    return 2022 - birthYear;
}

console.log(calcAge1(2015));

//function expression
const percentageOfWorld2 = function (population) {
    return (Number(population) / 7900) * 100;
}

const hkPopulation = percentageOfWorld2(7);
console.log(hkPopulation);*/

//arrow function
/*const calcAge2 = birthYear => 2022 - birthYear;

const age = calcAge2(1993);

//arrow function with multiple parameters/codes
const yearsUntilRetire = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

//arrow function p2
const percentageOfWorld3 = population => (Number(population) / 7200) * 100;

const hkPopulation2 = percentageOfWorld3(50);
console.log('hkpopulation is ' + hkPopulation2)*/

//functions in functions
/*const population = 40

const calcPopulationPercentage = function (population) {
    return (Number(population / 7200) * 100);
}

const describePopulation = function (country, population) {
    const percentage = calcPopulationPercentage(population);
    const description = `${country} has ${population} million people, which is ${percentage}% of the world`
    return description;
}

const chinesepopulation = describePopulation('China', 70)
console.log(chinesepopulation)*/

//JS Fundamentals P2 Challenge 1
/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (averageKoala, averageDolphins) {
    if (averageKoala >= averageDolphins * 2) {
        let results = `Koala won ${averageKoala} vs ${averageDolphins}`;
        console.log(results);
        return averageKoala;
    } else if (averageDolphins >= averageKoala * 2) {
        let results = `Dolphins won ${averageDolphins} vs ${averageKoala}`;
        console.log(results);
        return averageDolphins;
    } else {
        let results = `Koalas scored ${averageKoala} and Dolphins scored ${averageDolphins}. Double conditions were not met and no one won`;
        console.log(results);
        return -1;
    }
}

let scoreKoala = calcAverage(23, 34, 27);
let scoreDolphins = calcAverage(85, 54, 41);
console.log(scoreKoala, scoreDolphins)
const data1 = checkWinner(scoreKoala, scoreDolphins);
console.log(data1);*/

/*//JS Fundamentals pt2 Challenge 2
//tip calculator
const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}
//tip calculator + tips
const calcTip2 = function (billValue) {
    const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
    const totalValue = billValue + tip;
    return totalValue;
}

const billValue = [125, 555, 44]


const tipValue = [calcTip(billValue[0]), calcTip(billValue[1]), calcTip(billValue[2])];
console.log(billValue, tipValue);

const totalTip = [billValue[0] + tipValue[0], billValue[1] + tipValue[1], billValue[2] + tipValue[2]];
console.log(totalTip);*/

//array activity
/*const populations = [10, 20, 30, 40];
console.log(populations.length === 4);

const percentageOfWorld1 = function (populations) {
    return (populations / 7900) * 100;
}

console.log(percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]));
*/

//array methods
/*const neighbours = ['newzealand', 'png', 'oceania']

neighbours.push('utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes('germany')) {
    console.log('Probably a european country');
} else {
    console.log('probably not a central european country')
}

console.log(neighbours.indexOf('png'));
neighbours[1] = 'papaNewGuinea'
console.log(neighbours);*/


//object variable
/*const chris = {
    firstName: 'Chris',
    lastName: 'Yuen',
    age: 2022 - 1997,
    race: 'asian',
    sex: 'male',
    family: ['Mum', 'Dad', 'Charles'],
    calcAge: function (birthYear) {
        return 2022 - birthYear;
    }
}
//prompting for an object call
const needAnswer = prompt('What would you like to know? choose between firstName, lastName, age, sex, race')
if (chris[needAnswer]) {
    console.log(chris[needAnswer])
} else {
    console.log('Wrong request. Choose between the provided options')
}

//object calling challenge
console.log(`${chris.firstName} is ${chris.age} yearsold and he is an ${chris.race} ${chris.sex} and he has ${chris.family.length} family members, who are ${chris.family[0]}, ${chris.family[1]}, and ${chris.family[2]}`)


console.log(chris.calcAge(1997));
console.log(chris['calcAge'](1997));*/

//Object methods challenge
/*const chris = {
    firstName: 'Chris',
    lastName: 'Yuen',
    birthYear: 1997,
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    driversLicence: true,
    job: 'teacher',
    formSentence: function () {
        this.sentence = `${this.firstName} is a ${this.age} year old ${this.job} who has ${this.driversLicence ? 'a' : 'no'} drivers Licence`;
        return this.sentence;
    }
}

console.log(chris.calcAge());
console.log(chris.formSentence());
console.log(chris.driversLicence);
console.log(chris.sentence);*/

//objects
/*
console.log(myCountry.country, myCountry.population);
console.log(`${myCountry.country} has ${myCountry.population} Million people and has ${myCountry.neighbours.length} neighbours`)
myCountry.population = myCountry.population + 2;
console.log(myCountry.population)
console.log(myCountry['population'] = myCountry['population'] - 2);*/

//JS fundamental pt2 Challenge 3 - object methods
/*const jon = {
    firstName: 'jon',
    lastName: 'smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const mark = {
    firstName: 'mark',
    lastName: 'miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

jon.calcBMI();
mark.calcBMI();
console.log(jon.bmi, mark.bmi);
console.log(jon.bmi > mark.bmi ? `Jon's BMI (${jon.bmi}) is higher than Mark's BMI (${mark.bmi})` : `Mark's BMI (${mark.bmi}) is higher than Jon's BMI (${jon.bmi})`)
*/

//object methods
/*const myCountry = {
    country: 'Aus',
    langauge: 'Eng',
    population: 50,
    neighbours: ['NZ', 'PNG'],
    describe: function () {
        this.description = `${this.country} has ${this.population} million people and has ${this.neighbours.length} neighbours`;
        return this.description;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length >= 1 ? false : true;
        return this.isIsland;
    }
}

myCountry.describe();
console.log(myCountry.description);
myCountry.neighbours.pop();
myCountry.neighbours.pop();
myCountry.checkIsland();
console.log(myCountry.isIsland);*/



//Loops
/*console.log('Lifting weights repetition 1');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}*/

//loop & Arrays
/*const years = [1991, 2007, 1969, 2020];
let ages = []

for (let i = 0; i < years.length; i++) {
    let age = 2022 - years[i];
    ages.push(age);
}

console.log(ages)*/

//loops
/*const voting = 'Voter number 1 is now voting...';

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting.`)
};*/

//looping arrays, break + continue
/*
const populations = [10, 20, 30, 7200];
const percentageOfWorld1 = function (population) {
    return population / 7200 * 100;
}
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

//replace ^ with a while loop
let i = 0;
let percentages3 = [];
while (i < populations.length) {
    percentages3.push(populations[i] / 7200 * 100);
    i++;
}
console.log(percentages3);


//backwards loop
for (let i = populations.length - 1; i >= 0; i--) {
    console.log(populations[i]);
}

//loop in loop
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let indexNum = 0; indexNum < listOfNeighbours.length; indexNum++) {
    console.log(`list of neighbours index ${indexNum}`);

    for (let country = 0; country < listOfNeighbours[indexNum].length; country++) {
        console.log(`Neighbour: ${listOfNeighbours[indexNum][country]}`);
    }
}*/

//While loop
/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`you rolled a ${dice}`);
    if (dice === 6) {
        console.log('Loop will end now');
    }
}*/

//JSFundamentals pt2 Challenge#4
const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
]

//Calculate these:
let tips = [];
let totals = [];
//Calculation function
const calctip = function (bills) {
    const calc = bills >= 50 && bills <= 300 ? bills * .15 : bills * .20;
    return calc;
}
//Calculation loop
let eachBill = 0;
while (eachBill < bills.length) {
    const tip = calctip(bills[eachBill]);
    tips.push(tip);
    let total = bills[eachBill] + tip;
    totals.push(total);
    eachBill++;
}

console.log(`All tips = ${tips}`);
console.log(`bill totals = ${totals}`);

//Advanced
let sum = 0;
let total = [];

/*const calcAverage = function (arr) {
    while (sum < arr.length) {
        if (sum === 0) {
            total.push(arr[sum]);
        } if (sum >= 1 && sum < arr.length) {
            total.push(total[sum - 1] + arr[sum]);
            if (sum === 9) {
                average = total[sum] / arr.length;
            };
        } sum++;
    }
}*/
//calculation loop rewrite
const calcAverage = function (arr) {
    for (let i = 0; i < totals.length; i++) {
        sum = sum + arr[i];
    }
    console.log(`total of all bill is ${sum}`);
    return sum / arr.length;
}

const average = (calcAverage(totals));
console.log(sum);
console.log(average);

