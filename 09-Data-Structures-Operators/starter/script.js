'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*
const objquiz = {
  question: 'What is the best programming lang?',
  1: 'python',
  2: 'c',
  3: 'javascript',
  true: 'correct',
  false: 'try again',
  correct: 'javascript',
}

console.log(objquiz);
//converting obj to map
const objMap = new Map(Object.entries(objquiz));
console.log(objMap);

const mapQuiz = new Map([
  ['question', 'What is the best programming lang?'],
  [1, 'python'],
  [2, 'c'],
  [3, 'javascript'],
  [true, 'correct'],
  [false, 'try again'],
  ['correct', 'javascript'],
])

//iterating map
console.log(mapQuiz.get('question'));
for (const [key, value] of mapQuiz) {
  if (typeof key === 'number') console.log(`Answer ${key} = ${value}`);
};
const answer = Number(prompt(mapQuiz.get('question')));
console.log(answer);

alert(mapQuiz.get(mapQuiz.get(answer) === mapQuiz.get('correct')));*/

//challenge 3
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Array of events that has happened, no duplicate
const eventsArray = [...new Set(gameEvents.values())]

console.log(eventsArray);

//delete 64'' yellow card
gameEvents.delete(64);
console.log(gameEvents);

//calculate and log "an event occured on average every 9 minutes"
console.log(gameEvents.size);

let averageEvent = 90/gameEvents.size
console.log(`An event happened on average every ${averageEvent} minutes`);

//Loop over gameevents, log each element into console. Mark 1st/2nd half -> [First Half] 17: Goal

for (const [minute, event] of gameEvents.entries()){
  if (minute <= 45) console.log(`[FIRST HALF] ${minute}: ${event}`); else {
    console.log(`[SECOND HALF] ${minute}: ${event}`)
  };
}

//updated