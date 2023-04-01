// Solution:1

function mindGame(positiveNumber) {
    // "This function displays the value of mathematical addition, subtraction, multiplication, division".
      const solutionOne =  (positiveNumber * 3 + 10) / 2 - 5;
    return solutionOne;
  }
  
  let num1 = 5;
  const numbers = mindGame(num1);
  console.log(numbers);
  
  
  // -------------------------------------------------------------
  
  // Solution:2:
  
  function evenOdd(str){
    // "This function will determine whether the output value of the total character of a string will be EVEN or ODD".
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
  
  // -------------------------------------------------------------
  
  // Solution:3:
  
  function isLGSeven(numbers){
    // "This function calculates the difference(Less than/ Greater than) between one input value and another value".
    const num1 = numbers - 7;
    const sum2 = sum * 2;
    if(numbers < 7){
        console.log(num1);
        return num1;
    }
    else{
        console.log(sum2);
        return sum2;
    }
  }
  
  
  let sum = 6;
  const sum1 = isLGSeven(sum);
  
  // -------------------------------------------------------------
  
  // Solution:4:
  
  function findingBadData(numbers){
    // "This function determines how many positive or negative numbers are in the input value of an Array".
    let count = 0;
    
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < 0) count++;
    }
    return count;
    }
    
    let result = findingBadData([ 2, -5, -7, -13 ]);
    console.log(result);
    
  // -------------------------------------------------------------
  
  // Solution:5:
  
  function gemsToDiamond(gems1,gems2,gems3){
    // "This function displays the value of mathematical addition, subtraction, multiplication, division".
    const myDiamond = gems1 * 21,
          friend1Diamond = gems2 * 32,
          friend2Diamond3 = gems3 * 43,
          totalDiamond = myDiamond + friend1Diamond + friend2Diamond3;
  
    if(totalDiamond > 2000){
        return (totalDiamond - 2000);
    }else{
        return totalDiamond;
    }
  }
  console.log(gemsToDiamond(20, 200, 50));
  
  