//coding challenge 1

const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = [...dogsJulia.slice(1,3)];
    const arr = [...dogsJuliaCorrected, ...dogsKate];
    arr.forEach(function(age, i){
        const dog = age>=3?'adult':'puppy';
        if (dog==='adult') console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
        else console.log(`Dog number ${i+1} is still a puppy, at ${age} years old`);
    })
  }
  
  checkDogs([3,4,2,12,7], [4,1,15,8,3])
  checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])


//Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]


/////Coding challenge #2
const calcAverageHumanAge = function(ages){
  const humanAge = ages.map(function(dog){
    if (dog<=2) return 2;
    if (dog>2) return 16+dog*4;
  });
  const adults = humanAge.filter(function(humanAge){
    return humanAge >= 18;
  });
  const averageHumanAge = adults.reduce(function(acc,curr){
    return acc+curr
  }, 0) / adults.length;
  return averageHumanAge;
}

const challenge2data1 = [5,2,4,1,15,8,3]
const challenge2data2 = [16,6,10,5,6,1,4]

//////coding challenge #3 -> rewriting 2 but in chain + arrows
const calcAverageHumanAgeChain = function(ages){
  const averageHumanAge = ages.map(dog => dog <= 2? 2*dog: 16+dog*4).filter(humanAge=>humanAge>=18).reduce((acc,cur,i,adultsArray)=>acc+cur/adultsArray.length,0); //DIVISION HAPPENS BEFORE ACCUMULATOR
  return averageHumanAge
}

console.log(calcAverageHumanAgeChain(challenge2data1))
console.log(calcAverageHumanAgeChain(challenge2data2))