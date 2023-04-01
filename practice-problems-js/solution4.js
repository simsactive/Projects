// Solution:4:

function findingBadData(numbers){
let count = 0;

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    if(element < 0) count++;
}
return count;
}

let result = findingBadData([ 2, -5, -7, -13 ]);
console.log(result);
