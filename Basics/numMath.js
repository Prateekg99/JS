const balance = new Number(100);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 123.000;
console.log(anotherNumber.toPrecision(5))

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

 console.log(Math.random()*10  + "this is random value");
 
const min = 10
const max =20;

console.log(Math.floor(Math.random() * (max - min)) + min);