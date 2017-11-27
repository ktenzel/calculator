var userHeight = parseInt(prompt("What is your height in cm: "));
var userWeight = parseInt(prompt("What is your weight in kgs: "));

var bmi = function(userHeight, userWeight){
  return (userWeight / (userHeight * userHeight / 10000)).toPrecision(4);
};

alert("Your BMI is " + bmi(userHeight, userWeight));
