function convertirCelsius(){
	var entrada = document.getElementById("farenheit").value;
	var gradF = ((9/5)*entrada)+32;
	gradF = gradF.toFixed(2);
	document.getElementById("res").innerHTML=gradF;
}
