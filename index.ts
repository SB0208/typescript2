const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled Numbers:', doubledNumbers);


const words = ['apple', 'banana', 'cherry', 'kiwi', 'grape'];
const longWords = words.filter(word => word.length > 5);
console.log('Words longer than 5 letters:', longWords);


const nums = [10, 20, 30, 40];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of numbers:', sum);


const numArray = [2, 5, 8, 12, 4];
const isGreaterThanTen = numArray.some(num => num > 10);
console.log('Is at least one number greater than 10?:', isGreaterThanTen);


