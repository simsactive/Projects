const number = [2, 4, 1, 9, 3, 5, 26, 7];
const number2 = [32, 45, 67];

// console.log(Math.min(...number));
// console.log(Math.max(...number2));

// console.log(...number);

// const newArray = [123, 21, 24, ...number2, 99, 86, 75]

// console.log(newArray);

// const arr1 = [1,2,3,4,5];

// const arr2 = [...arr1];

// arr1.push(99, 100);
// arr2.push(55, 200);

// console.log(arr1)
// console.log(arr2)

const arr = [1,2,3,4,5,6,7];

// const first = arr[0];
// const second = arr[1];

const [first,second,...remaining] = arr;

console.log(first, second);
console.log(remaining);
console.log(arr);



