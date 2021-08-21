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

const markWeight = 95;
const markHeight = 1.88;
const markBmi = markWeight / markHeight ** 2;


const johnWeight = 85;
const johnHeight = 1.76;
const johnBmi = johnWeight / johnHeight ** 2;

if (markBmi > johnBmi) {
    console.log(`Marks is higher by ${markBmi - johnBmi}!`)
} else {
    console.log(`Johns is higher by ${johnBmi - markBmi}!`)
}