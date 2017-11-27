var tempC = parseInt(prompt("What is them temp in Celsius: "));

var tempF = function(tempC){
  return tempC  * 1.8 + 32;
};

alert("The temp in F is" + tempF(tempC));
