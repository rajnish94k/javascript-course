// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// let PI = 3.1415;
// console.log( PI );

// let firstName = 'Rajnish';

// console.log(firstName);

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);

// let age = 30;
// age = 31;

// const birthYear = 1993;
// birthYear = 1990;

// const job;

// var job = 'programmer';
// job = 'teacher';

// Maths operator
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2**3);
// 2**3 means 2 to the power of 3 = 2*2*2

// const firstName = 'Jonas';
// const secondtName = 'Schmedtmann';
// console.log(firstName + ' ' + secondtName);

// Assignment operator
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101 
// x--; // x = x - 1 = 100 
// x--; // x = x - 1 = 101 
// console.log(x);

// Comparison operator
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// chelange 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// const firstName = 'Jonas';
// const Job = 'Teacher';
// const birthYear = '1991';
// const year = '2037';

// const jonas = "I'm" + ' ' + firstName + ', a' + ' ' + (year - birthYear) + ' ' + 'years old' + ' ' + Job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${Job} !`;
// console.log(jonasNew);

// console.log(`Just a regular string....`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age =  15;
// const isOldEnough = age >= 18;

// if(age >= 18) {
//     console.log('Sarah can start driving');
// } 

// if(age >= 18) {
//     console.log('Sarah can start driving');
// } else{
//     const yearLeft = 18 - age;
//     console.log(`Sarah is too young please wait for another ${yearLeft} years`);
// }

// const birthYear = 2021;

// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//=================== chelange 2 =================

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is greater than john's BMI");
// } else {
//     console.log("John's BMI is greater than Mark's BMI");
// }

// type conversion ==================

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Rajnish'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion ==================

// console.log('I am ' + 23 + ' year old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// 5 falsy value: 0, '', undefined, null

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Rajnish'));
// console.log(Boolean(0));
// console.log(Boolean(0));
// console.log(Boolean(''));

// const money = 100;

// if (money) {
//     console.log("Don't spend it all ;")
// } else {
//     console.log('You should get a job !');
// }

// let height = 100;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED'); 
// }

// const age = 18;
// if (age === 18) {
//     console.log('You just became an adult (strict)');
// }
// if (age == 18) {
//     console.log('You just became an adult (loos e)');
// }

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(typeof favourite);

// if (favourite === 23) { // 23 === 23
//     console.log('Cool ! 23 is an amazing number');
// }

// const hasDriversLicense = true // A
// const hasGoodVision =  true //A

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Saarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// Switch statement =========================

// const day = 'Friday';

// switch (day) {
//     case 'Monday':
//         console.log('monday is my leg day');
//         break;
//     case 'Tuesday':
//         console.log('Tuesday is my back day');
//         break;
//     case 'Wednesday':
//         console.log('wednesday is my biceps day');
//         break;
//     case 'Thursday':
//         console.log('Thursday is my shoulder day');
//         break;
//     case 'Friday':
//         console.log('Friday is my triceps day');
//         break;
//     case 'Saturday':
//         console.log('Saturday is my chest day');
//         break;
//     case 'Sunday':
//         console.log('Sunday is my weekend');
//         break;
//     default:
//         console.log('This day is not valid');
// }

// if (day === 'Monday') {
//     console.log('monday is my leg day');
// } else if (day === 'Tuesday') {
//     console.log('Tuesday is my back day');
// } else if (day === 'Wednessday') {
//     console.log('wednesday is my biceps day');
// } else if (day === 'Thursday') {
//     console.log('Thursday is my shoulder day');
// } else if (day === 'Friday') {
//     console.log('Friday is my triceps day');
// }else if (day === 'Saturday') {
//     console.log('Saturday is my chest day');
// } else if (day === 'Sunday') {
//     console.log('Sunday is my weekend');
// }

// ===================================  Ternary oprator ================== 

// const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'Wine' : 'water';
// console.log(drink);

// let drink2;

// if (age >= 18){
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'Wine' : 'water'}`);

// const bill = 40;
// let tip;
// const tip = bill <= 300 && bill >= 50 ? bill * 15 / 100 : bill * 20 / 100;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip} `);

// if ((bill >= 50) && (bill <= 300)) {
//     tip = bill * 15 / 100;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip} `);
// } else {
//     tip = bill * 20 / 100;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip} `);
// }
    