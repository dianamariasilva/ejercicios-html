function convertirCelsius(){
	var entrada = document.getElementById("farenheit").value;
	var gradF = ((9/5)*entrada)+32;
	document.write (gradF);
}
temperatura();