// const markWeight = 78;
// const markHeight = 1.69;
// const markBmi = markWeight / markHeight ** 2;


// const johnWeight = 92;
// const johnHeight = 1.95;
// const johnBmi = johnWeight / johnHeight ** 2;

// console.log(markBmi, johnBmi);

// const markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi)

// const firstName = 'Jonas';
// const job = 'Teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I am a regular string!`)

// console.log('String with \n\
// multiple \n\
// lines \n\
// ') //                   <---   Old Way of doing line breaks.

// console.log(`we have 
// multiple
// lines
// here`) //                <----   New way.


// const age = 15;
// if (age >= 18) {
//     console.log(`Sarah can start driving 😫`)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah your are too young please wait another ${yearsLeft} years.`)
// }

// //   if (

// //   ) else {             <--- An IF/ELSE CONTROL STRUCTURE.

// //   }

// const birthYear = 2012;
// let century = '';
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// const markWeight = 95;
// const markHeight = 1.88;
// const markBmi = markWeight / markHeight ** 2;


// const johnWeight = 85;
// const johnHeight = 1.76;
// const johnBmi = johnWeight / johnHeight ** 2;

// if (markBmi > johnBmi) {
//     console.log(`Marks is higher by ${markBmi - johnBmi}!`)
// } else {
//     console.log(`Johns is higher by ${johnBmi - markBmi}!`)
// }


// //Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

// // Type Coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' > '10');

// 5 Falsy values 0,'',null,NaN,Undefined,False

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean('Jonas'));
// console.log(Boolean(0));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job");
// }

// let height = 23;
// if (height) {
//     console.log("Yay! Height is defined!");
// } else {
//     console.log("Height is undefined.")
// }

// const age = 18;
// if (age === 18) console.log('You just became an adult! ;D (Strict)');

// if (age == 18) console.log(' You just became an adult! :D (Loose)');

// const favourite = prompt("What is your favorite number?");
// console.log(favourite);
// console.log(typeof favourite);
// // if (favourite == 23) {
// //     console.log("Cool! mine is also 23!")
// // }// '23' == 23 String to number conversion with double equal signs

// if (favourite === 23) {
//     console.log("Cool! mine is also 23!")
// } else if (favourite == 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log("Neither 23 or 7")
// }

// if (favourite !== 23) console.log('Why not 23?');

const hasDriversLicense = true;// A
const hasGoodVision = true;// B

console.log(hasDriversLicense && hasGoodVision);// AND
console.log(hasDriversLicense || hasGoodVision);// OR
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive.')
// }

const isTired = false;// C
console.log(hasGoodVision && hasDriversLicense && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive.')
}
