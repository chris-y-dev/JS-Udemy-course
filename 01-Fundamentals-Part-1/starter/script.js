//Coding Challenge #1 BMI calculation
//storing mass and height
/*const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2
console.log(markBMI, johnBMI)
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//test 2
const markMassData2 = 95;
const markHeightData2 = 1.88;
const johnMassData2 = 85;
const johnHeightData2 = 1.76;

const markBMIData2 = markMassData2 / markHeightData2 ** 2
const johnBMIData2 = johnMassData2 / johnHeightData2 ** 2
console.log(markBMIData2, johnBMIData2)
const markHigherBMIData2 = markBMIData2 > johnBMIData2;
console.log(markHigherBMIData2);*/


/* Challenge 2
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2
console.log(markBMI, johnBMI)
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
} */

//coding challenge 3
/*const averageScoreDolphins = (100 + 60 + 100) / 3;
const averageScoreKoalas = (400 + 60 + 100) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);*/

//simplle
/*if (averageScoreDolphins > averageScoreKoalas) {
    console.log(`Dolphin's average (${averageScoreDolphins}) beats Koala's average (${averageScoreKoalas})`);
} else if (averageScoreKoalas > averageScoreDolphins) {
    console.log(`Koala's average (${averageScoreKoalas}) beats Dolphin's average (${averageScoreDolphins})`);
} else if (averageScoreDolphins === averageScoreKoalas) {
    console.log(`Both teams win!`)
}*/

//minimum 100 score
/*if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log(`Dolphin's average (${averageScoreDolphins}) beats Koala's average (${averageScoreKoalas})`);
} else if (averageScoreDolphins > averageScoreKoalas && !(averageScoreDolphins >= 100)) {
    console.log(`MINIMUM NOT REACHED, but Dolphin's average (${averageScoreDolphins}) beats Koala's average (${averageScoreKoalas})`);
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
    console.log(`Koala's average (${averageScoreKoalas}) beats Dolphin's average (${averageScoreDolphins})`);
} else if (averageScoreKoalas > averageScoreDolphins && !(averageScoreKoalas >= 100)) {
    console.log(`MINIMUM NOT REACHED but Koala's average (${averageScoreKoalas}) beats Dolphin's average (${averageScoreDolphins})`);
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    console.log(`Both teams win and is above 100!`)
} else {
    console.log(`Draw but does not meet minimum 100 requirement`);
}*/

//Challenge 4
const bill = Number(prompt("How much is the bill?"));
const tipPercent = Number(bill >= 50 && bill <= 300 ? '15' : '20');
console.log(`the tip is ${tipPercent}%`);

const tipValue = bill * (tipPercent / 100);
console.log(`The bill was ${bill}, the tip was ${tipValue}, and the total amount paid was ${bill + tipValue} `);