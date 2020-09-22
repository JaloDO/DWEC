

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

var array1 = ["valor1", "valor2", "valor3"];
document.getElementById("salidaArray").innerHTML=array1;