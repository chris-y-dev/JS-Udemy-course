'use strict';


//#coding challenge 1
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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Coding Challenge 2
/*
//1. Loop over game.scored array and print each name, along with goal number
const scorers = game.scored;

for (const [goalNum, player] of scorers.entries()) {
  console.log(`Goal number ${goalNum+1}: ${player}`);
}

//2. Calculate average odd and log into console. 
const odds1 = Object.values(game.odds);
let total = 0;
let average;
for (const x of odds1) {
  total += x;
  average = total/odds1.length;
};
console.log(average);


//3. print all 3 odds, formatted with team names. Do not hardcode
const oddObj = Object.entries(game.odds);

for (const [result, odd] of oddObj) {
  console.log(result, odd);
  const teamStr = result==='x'?'Draw':`victory ${game[result]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//4 
const names = Object.entries(game.scored);
let scorersObj = {};
const scorers2 = {};

//My solution
for (const [index, name] of names) {
  //console.log([`scorersObj.${name}`]);
  if (!scorersObj[`${name}`]) {
    scorersObj[`${name}`] = 1;
} else {
  scorersObj[`${name}`] += 1;
}
}

//Better solution
for (const [index, player] of names) {
  console.log(index, player);
  scorers2[player] ? scorers2[player]++ : scorers2[player]=1;
  console.log(scorers2);
}
*/

/*
//1create one array for each team.
const [players1, players2] = game.players;
console.log(players1, players2); 

//2 first player = GK, rest are field players
const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper, fieldPlayers);

//array of all players
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4 create new array with all players + thiago coutinho perisic
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5 Create one variable 
const {team1, x: draw, team2} = {...game.odds};
console.log(team1, draw, team2);

//5 extra challenge
const {odds: {team1: team1X, x: drawX, team2: team2X}} = game;
console.log(team1X, drawX, team2X);

//6 printGoals function
const printGoals = function(...playerNames){
  console.log(`${playerNames.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

//7 Which team is more likely to win?
team1 < team2 && console.log('team 1 is more likely to win');
team2 < team1 && console.log('team2 is more likely to win');
*/

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

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
  
  orderDelivery: function({starterIndex, mainIndex, time, address}){
    console.log(`Order received: 
    Starter ordered: ${this.starterMenu[starterIndex]}, 
    Main ordered: ${this.mainMenu[mainIndex]},
    Time for delivery: ${time},
    Address for delivery: ${address}`)
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//sets
const orderSet = new Set(['pizza', 'bread', 'pie', 'bread', 'pie'])
console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.add('drink'));
console.log(orderSet);
console.log(orderSet.has('bread'));
console.log(orderSet.has('milk'));
console.log(orderSet.delete('drink'));
console.log(orderSet);

const staff = ['waiter', 'waiter', 'manager', 'police', 'boss']
const staffUnique = new Set(staff);
staffUnique.delete('police');
console.log(staffUnique);
console.log(new Set('abcdeffff').size);