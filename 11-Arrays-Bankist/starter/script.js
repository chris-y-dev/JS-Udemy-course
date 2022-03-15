'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Manipulating DOM elemnents
const displayMovements = function(movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function(mov, i){
    const type = mov>0?'deposit':'withdrawal'
    const html =  `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div> 
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};



/////Calculate + Print Balance on UI
const calcDisplayBalance = function(movements) {
  const sum = movements.reduce(function(acc, cur){
    return acc+cur
  }, 0);
  labelBalance.textContent = `${sum}EUR`
}

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////Lectures

//Array methods: Map, Filter, Reduce
  /*
  //Map method - converting currencies
  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

  /////////////////////////////////////////////////

  const eurtoUsd = 1.1;
  const movementsInUSD = movements1.map(function(mov) {
    return mov*eurtoUsd}) //arrow callback function

  //console.log(movementsInUSD);


  //Filter method
  const getDeposit = movements1.filter(function(mov){
    return mov > 0
  });

  console.log(getDeposit)

  const withdrawals = movements1.filter(function(mov){
    return mov < 0;
  })
  console.log(withdrawals);

  //Reduce method
  const balance = movements1.reduce(function(acc, cur){
    return acc + cur
  }, 0);

  console.log(balance);

//chainging methods - take all deposits, convert to USD + add

const sumConvertUSD = function(movements){
  const balanceUSD = movements
  .filter(mov => mov>0)
  .map(mov=>mov*1.1)
  .reduce((acc,cur)=>acc+cur, 0);
  return balanceUSD;
};

console.log(sumConvertUSD(account1.movements));
*/

//changing display summary at bottom of app
const calcDisplaySummary = function(acc){
  const incomes = acc.movements
    .filter(mov=>mov>0)
    .reduce((acc,cur)=>acc+cur ,0);
  labelSumIn.textContent=`${incomes}€`;

  const outflow = acc.movements
  .filter(mov=>mov<0)
  .reduce((acc,cur)=>acc+cur ,0);
  labelSumOut.textContent=`${outflow}€`;

  const interest = acc.movements
    .filter(mov=>mov>0)
    .map(deposits=>(deposits*acc.interestRate)/100)
    .filter(function(int,i,arr){
      console.log(arr);
      return int>=1;
    })
    .reduce((acc,int)=>acc+int, 0);
  labelSumInterest.textContent=`${interest}€`;
  };


///Find method
  /*
  console.log(accounts);
  const account = accounts.find(function(acc){ ///pass array of account objects
    return acc.owner==='Jessica Davis' ///search owner name
  })
  console.log(account);
*/

//Map method - for each individual string
/*
const createUserName = function(account1){
  const userName = user.toLowerCase().split(' ').map(function(name){
    return name[0];
  }).join('');
  return userName;
}
*/

//map + forEach -> copying the individual function to affect ALL objects
const createUsername = function(acc){
  acc.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(function(name){
      return name[0];
    }).join('');
  })
}
createUsername(accounts)

///Login
//username comes from, pin comes from 
//btnLogin inputLoginUsername  inputLoginPin

//event handlers0
let currentAccount;

btnLogin.addEventListener('click', function(e){
  e.preventDefault();

  currentAccount = accounts.find(function(acc){
    return acc.username === inputLoginUsername.value;
  });
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Display movements
    displayMovements(currentAccount.movements);

    //Display balance
    calcDisplayBalance(currentAccount.movements);

    //Display Summmary
    calcDisplaySummary(currentAccount);

  } else console.log('WRONG PIN');
})

