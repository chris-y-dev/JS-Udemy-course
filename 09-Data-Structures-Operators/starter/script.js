'use strict';

// Data needed for a later exercise


  /*
  Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

  The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
  
  THIS TEST DATA (pasted to textarea)
  underscore_case
   first_name
  Some_Variable 
    calculate_AGE
  delayed_departure
  
  SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
  underscoreCase      ✅
  firstName           ✅✅
  someVariable        ✅✅✅
  calculateAge        ✅✅✅✅
  delayedDeparture    ✅✅✅✅✅
  
  HINT 1: Remember which character defines a new line in the textarea 😉
  HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
  HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
  HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
  
  Afterwards, test with your own test data!
  
  GOOD LUCK 😀
  */

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//const str = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  
  //function
  const convertCamel = function(str){
    const strNormalise = str.toLowerCase().trim().split('_');
    const capArr = [];
    for (const word of strNormalise){
      capArr.push(word[0].toUpperCase() + word.slice(1)) 
    };
    const camelFinal = capArr.join('');
    return camelFinal;
  };
  
  //calling function + printing
  for (const [key, input] of rows.entries()){
    console.log(`${convertCamel(input).padEnd(20, ' ')} ${'✅'.repeat(key + 1)}`);
  };
})
//After splitting text, pass convertCamel function and print scores





//Function that collects strings written with _ and convert to CamelCase */

//String practice - webAPI
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


for (const flight of flights.split('+')){
  //splitting individual flight content
  for (const details of flight.split(';')){
    const [stat, origin, destination, time] = flight.split(';');
      const output = (`${stat.startsWith('_Delayed')?'🔴':''} ${stat.replaceAll('_', ' ').trim()} from ${origin.toUpperCase().slice(0,3)} to ${destination.toUpperCase().slice(0,3)} (${time.replace(':', 'hr')})`).padStart(50, ' ')
      console.log(output);
  }
}