const markWeight = 78;
const markHeight = 1.69;
const markBmi = markWeight / markHeight ** 2;


const johnWeight = 92;
const johnHeight = 1.95;

const johnBmi = johnWeight / johnHeight ** 2;

console.log(markBmi, johnBmi);

const markHigherBmi = markBmi > johnBmi;
console.log(markHigherBmi)

