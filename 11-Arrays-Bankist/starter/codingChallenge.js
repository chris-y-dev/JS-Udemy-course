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