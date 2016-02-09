//var tempF = Math.floor((Math.random()*200)+1);
//var tempF = prompt("What's the Temperature in F?")
//var tempC = (tempF-32)*5/9;
//var tempCC = Math.floor((Math.random()*200)+1);
//var tempFF = (TempCC*9/5+32);
//console.log("The temperature in Fahrenheit is"+ " " + tempF + "." + " " + "Therefore, the temperature in Celsius is:" + " " + tempC + ".");
//console.log(" Show yor work: The conversion of Fahrenheit to Celsius is [(F-32) x 5/9]");
//console.log("If the temperature in Celsius is"+ " " + tempCC + "," + " " + "Then the temperature in Fahrenheit is:" + " " + tempFF + ".");
//console.log(" Show yor work: The conversion of Celsius to Fahrenheit is [(C*9/5 +32]");


var pop=function myFunction() {
	var tempF = prompt("What's the Temperature in F?")
	var tempC = (tempF-32)*5/9;
	//var tempCC = Math.floor((Math.random()*200)+1);
	//var tempFF = (TempCC*9/5+32);
   	document.getElementById("demo").innerHTML = ("That's " + tempC +" in Celsius.");
   
}


//The temperature in Fahrenheit is"+ " " + tempF + "." + " " + "Therefore, the temperature in Celsius is:" + " " + tempC + "." + "If the temperature in Celsius is"+ " " + tempCC + "," + " " + "Then the temperature in Fahrenheit is:" + " " + tempFF + ".";
//}