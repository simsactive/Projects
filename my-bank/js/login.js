// step-1: add click event handler with the login button
document.getElementById('btn-login').addEventListener('click', function(){
// step-2: get the email address inside the input field
// always remember, to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// step-3: get password
// 3.a: set id on the html element
// 3.b: get the element
// 3.c: get the value of the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

// DANGER::: Do Not Verify email password on the client side

// step-4: verify email and password
if(email === 'faisal@simsbank.com' && password === 'simon905'){
    window.location.href = 'bank.html';
}
else{
    alert('Invalid User');
}


})