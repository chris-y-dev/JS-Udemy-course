// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Progblem 1 finding Max and Min values in an Array
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [100, 99, 98, 97];

const calcTempAmplitude = function(temps){
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++){
        if (typeof temps[i] !== 'number') continue;
        
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];
    } 
    console.log(max);
    console.log(min);
    return max-min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

/*
//problem 2, function will now receive 2 arrays of temperatures
    //merge two arrays

let merge = [];
const mergeArray = temperatures.concat(temperatures2);
console.log(mergeArray);

//Creating a Kelving convertor + Debugging

const measureKelv = function(){
    const measurement = {
        type: 'temperature',
        unit: 'celcius',
        value: Number(prompt('degrees celcius'))
    }
    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelv());
*/

//Find bug using Debugger
/*
const temperaturesBug = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2Bug = [100, 99, 98, 97];

const calcTempAmplitudeBug = function(temps){
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++){
        if (typeof temps[i] !== 'number') continue;
        
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];
    } 
    console.log(max);
    console.log(min);
    return max-min;

}

const amplitudeBug = calcTempAmplitudeBug(temperaturesBug);
console.log(amplitudeBug);
*/

//Debugging Coding Challenge
const printForecast = function(arr){
    let str = ''
    for(let i = 0; i<arr.length; i++){
        str += `${arr[i]}^C in ${i+1}days ... `;
    } return sentence = str;
}

const Data1 = [17,21,23];
const Data2 = [12, 5, -5, 0, 4];
let sentence = '';


const sentence1 = printForecast(Data1);
const sentence2 = printForecast(Data2);
console.log(sentence1);
console.log(sentence2);

console.log(sentence);