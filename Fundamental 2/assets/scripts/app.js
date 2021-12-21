// "use strict";
// var a = 10;
// console.log(a);

// function abc(){
//     var b = 20;
//     console.log(b);
// }
// abc();

// =========== Function ==============

// function logger() {
//     console.log('My name is Rajnish');
// }
// Calling / runnung / invoking function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    // const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    // return juice;
// }

// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// console.log(fruitProcessor(5, 0));

// const appleorangeJuice = fruitProcessor(2, 4);
// console.log(appleorangeJuice);


// By me ========
// function age(date, month, year){
//     console.log(date, month, year);
//     const fullAge = `I was born on ${date} date ${month} month ${year} year`;
//     return fullAge;
// }
// const ageWithSentence = age(30, 11, 1993);
// console.log(ageWithSentence);

// ========================== Function declarations ===========================

// function calcAge1(birthYear){
    // const age = 2037 - birthYear;
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1993);
// console.log(age1);

// ========================== Function Expresion ===========================

// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);


// ========================== Arrow Function ===========================

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);      

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Rajnish'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// const elder = (birthYearAnshu, birthYearRajnish, gfName, bfName) => {
//     const anshuAge = 2021 - birthYearAnshu;
//     const rajnishAge = 2021 - birthYearRajnish;
//     const calcAge = anshuAge - rajnishAge;
//     return `${gfName} is ${calcAge} year elder than ${bfName}`;
// } 
// console.log(elder(1992, 1993, 'anshu', 'rajnish'));

// ============================== ARRAY =========================== //
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// friends = ['Bob', 'Alice'];
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// ===============  Exercise

// function calcAge(birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);

// ==================== Basic array operation methods ===================
//  const friends = ['Michael', 'Steven', 'Peter'];
//  friends.push('Jay');

// ============== Add elements
// const newLength = friends.push('Jay');
//  console.log(friends);
//  console.log(newLength);

//  friends.unshift('John');
//  console.log(friends);

// ============== Remove elements =====
// friends.pop(); // Last
// const poped = friends.pop();
// console.log(poped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend Steven');    
// }


// ==================== Objects =================

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const intrestedIn =  prompt();

if (jonas[intrestedIn]) {
    console.log(jonas[intrestedIn]);
} else {
    console.log('Wrong request! choose between firstName, lastName, age, job, friends');
}
