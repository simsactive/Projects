document.getElementById('btn-case-plus').addEventListener('click', function(){
const caseNumberField = document.getElementById('case-number-field');
const caseNumberFieldString = caseNumberField.value;
const previousCaseNumber = parseInt(caseNumberFieldString);

const newCaseNumber = previousCaseNumber + 1;
caseNumberField.value = newCaseNumber;

})