const num = [1,2,3,4,5];


// sum of all number
// const newNumber = num.reduce(function(acc,curr) { return acc+curr, 0});
                                // or
const newNumber = num.reduce((acc,curr) =>  acc+curr, 0);
console.log(newNumber)


// multiplication of all number
const mulNumber = num.reduce((acc,curr) =>  acc*curr, 1);
console.log(mulNumber)
f