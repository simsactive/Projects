// Solution:2:

function evenOdd(str){
    const lengthCheck = str.length % 2;
    if(lengthCheck == 0){
        return "even"
    }
    else{
        return "odd"
    }
}

let solutionTwo = "Batch7";
const results = evenOdd(solutionTwo);
console.log(results);
