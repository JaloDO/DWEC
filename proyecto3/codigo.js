result = "";

function accion(){
	flag = confirm("Eres un putero?");
	result = "";
	
	if(alert(flag)==true){
		result = result + "\nEres un putero";
		document.getElementById("resultado").innerHTML = result;
	}else{
		result = result + "\nAparte de putero, falso";
		document.getElementById("resultado").innerHTML = result;
	}
}
objetoArray = document.getElementById("salidaArray")
var array1 = ["valor1", "valor2", "valor3", true, 5, 6, 7, objetoArray];
document.getElementById("salidaArray").innerHTML=array1;