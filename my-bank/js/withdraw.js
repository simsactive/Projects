/*
1. add event handler with the withdraw button

2. get the withdraw from the withdraw input field
----- also make sure to covert the input into a number by using parsefloat

3. get previous withdraw total

4. calculate total withdraw total
---- set the withdraw total amount

5. get the previous balance total

6. calculate mew balance total
---- set the new balance total

7. clear the input field
*/




// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){

// step-2: 
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// step-7
withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('Please, provide valid number of amount');
    return;
}

// step-3: 
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step-5:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

if(newWithdrawAmount > previousBalanceTotal){
    alert('Sorry!!!  You have no sufficient balance.')
    return;
}

// step-4:
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;


// step-6
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;

})

